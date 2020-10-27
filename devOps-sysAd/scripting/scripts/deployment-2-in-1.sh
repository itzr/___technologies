#!/bin/bash

LANG="C"

CL_RED="\e[01;31m"
CL_GREEN="\e[00;32m"
CL_YELLOW="\e[01;33m"
CL_CYAN="\e[01;96m"
CL_OFF="\e[00m"

# FUNCTIONS
echo_green_ts() {
    TS=`date '+%Y-%m-%d %H:%M:%S'`
    echo_green "[$TS] ${@}"
}

echo_yellow_ts() {
    TS=`date '+%Y-%m-%d %H:%M:%S'`
    echo_yellow "[$TS] ${@}"
}

echo_red_ts() {
    TS=`date '+%Y-%m-%d %H:%M:%S'`
    echo_red "[$TS] ${@}"
}

echo_green() {
    echo -e "${CL_GREEN}${@}${CL_OFF}"
}

echo_yellow() {
    echo -e "${CL_YELLOW}${@}${CL_OFF}"
}

echo_red() {
    echo -e "${CL_RED}${@}${CL_OFF}"
}

echo_debug() {
    if [ $DEBUG -eq 1 ]; then
        >&2 echo -e "${CL_CYAN}>>> DEBUG: ${@}${CL_OFF}"
    fi
}

export -f echo_green_ts
export -f echo_red_ts

if [ -z "$1" ]; then
    BRANCH="master"
else
    BRANCH=$1
fi

RET=0
IS_TAG=0
SERVICE_DIR_PRODUCTION="/opt/<dir>" #

SERVICE_DIR_WORDIR_1="/opt/<dir>-WORK_1"
SERVICE_DIR_WORDIR_2="/opt/<dir>-WORK_2"

SERVICE_DIR_CURRENT=$(readlink $SERVICE_DIR_PRODUCTION)
if [ $SERVICE_DIR_CURRENT == $SERVICE_DIR_WORDIR_1 ]; then
    SERVICE_DIR=$SERVICE_DIR_WORDIR_2
else
    SERVICE_DIR=$SERVICE_DIR_WORDIR_1
fi

echo
echo_green_ts ">>> CURRENT WORKING INSTALLATION IN ${CL_YELLOW}${SERVICE_DIR_CURRENT}${CL_OFF}"

echo
echo_green_ts ">>> DEPLOYING TO ${CL_YELLOW}${SERVICE_DIR}${CL_OFF}"

REPO="git@bitbucket.org:<repo_1>.git"
REPO_V8CLIENT="git@bitbucket.org:<repo_2>.git"
REPO_KEY="/home/ansible/.ssh/<repo_key>"

PHP_SERVICE="php74-php-fpm"
NGINX_SERVICE="nginx"

if [ $BRANCH != "master" ]; then
    echo
    echo ">>> CHECKING IF BRANCH / TAG EXISTS"
    ALL=`ssh-agent bash -c "ssh-add $REPO_KEY 2>/dev/null; git ls-remote --heads --tags $REPO"`
    EXISTS=`grep "refs/tags/${BRANCH}" <<< "$ALL"`
    if [ -z "$EXISTS" ]; then
        EXISTS=`grep "refs/heads/${BRANCH}$" <<< "$ALL"`
        if [ -z "$EXISTS" ]; then
            echo
            echo_red_ts ">>> ERROR"
            exit 1
        fi
    else
       IS_TAG=1
    fi
fi

echo
echo_green_ts ">>> REMOVING CACHE"
rm -rf ${SERVICE_DIR}/var/cache/*

echo
echo_green_ts ">>> UPDATING MAIN REPOSITORY"

cd "$SERVICE_DIR"

ssh-agent bash -c "ssh-add $REPO_KEY 2>/dev/null; git fetch origin; git reset --hard origin/master; git fetch"

if [ $? -ne 0 ]; then
    echo_red_ts ">>> ERROR"
    exit 2
fi

echo
echo_green_ts ">>> CHECKING OUT ${CL_YELLOW}${BRANCH}${CL_OFF}H"
if [ $IS_TAG -eq 0 ]; then
    git checkout origin/$BRANCH 2>&1
else
    git checkout $BRANCH 2>&1
fi
if [ $? -ne 0 ]; then
    echo_red_ts ">>> ERROR"
    exit 3
fi

echo
echo_green_ts ">>> RUNNING COMPOSER"
cd "$SERVICE_DIR"

if [ $? -ne 0 ]; then
    echo_red_ts ">>> ERROR returned by composer install script"
    exit 4
fi

echo
echo_green_ts ">>> REBUILD YARN"
cd "$SERVICE_DIR"
yarn && yarn encore production

if [ $? -ne 0 ]; then
    echo_red_ts ">>> ERROR returned by yarn rebuild script"
    exit 5
fi

cd "$SERVICE_DIR/assets/"

if [ ! -d "v8-client" ]; then
    echo
    echo_green_ts ">>> FETCHING V8 CLIENT REPOSITORY"

    ssh-agent bash -c "ssh-add $REPO_KEY 2>/dev/null; git clone ${REPO_V8CLIENT} v8-client; git checkout master"
    if [ $? -ne 0 ]; then
        echo_red_ts ">>> ERROR"
        exit 2
    fi
else
    echo
    echo_green_ts ">>> UPDATING V8 CLIENT REPOSITORY"
    cd "$SERVICE_DIR/assets/v8-client"
    ssh-agent bash -c "ssh-add $REPO_KEY 2>/dev/null; git fetch origin; git reset --hard origin/master; git fetch"
    if [ $? -ne 0 ]; then
        echo_red_ts ">>> ERROR"
        exit 2
    fi
fi

echo
echo_green_ts ">>> CHECKING OUT V8-CLIENT MASTER BRANCH"
cd "$SERVICE_DIR/assets/v8-client"
if [ $IS_TAG -eq 0 ]; then
    git checkout origin/$BRANCH 2>&1
else
    git checkout $BRANCH 2>&1
fi
if [ $? -ne 0 ]; then
    echo_red_ts ">>> ERROR"
    exit 3
fi

echo
echo_green_ts ">>> INSTALLING REQUIRED V8-CLIENT NPM MODULES"
npm install --unsafe-perm
if [ $? -ne 0 ]; then
    echo_red_ts ">>> ERROR"
    exit 3
fi

echo
echo_green_ts ">>> BUILDING V8-CLIENT USING YARN"
yarn build
if [ $? -ne 0 ]; then
    echo_red_ts ">>> ERROR"
    exit 3
fi

echo
echo_green_ts ">>> RUNNING DB MIGRATIONS"
cd "$SERVICE_DIR"
php bin/console doctrine:migrations:migrate -q
if [ $? -ne 0 ]; then
    echo_red_ts ">>> ERROR"
    exit 3
fi

echo
echo_green_ts ">>> CHANGING CURRENT SYMLINK"
unlink $SERVICE_DIR_PRODUCTION
if [ $SERVICE_DIR_CURRENT == $SERVICE_DIR_WORDIR_1 ]; then
    ln -s $SERVICE_DIR_WORDIR_2 $SERVICE_DIR_PRODUCTION
else
    ln -s $SERVICE_DIR_WORDIR_1 $SERVICE_DIR_PRODUCTION
fi
echo
service nginx reload

echo
echo_green_ts ">>> FIXING PRIVLEGES"
chown -R apache:apache $SERVICE_DIR_PRODUCTION/var/cache
chown -R apache:apache $SERVICE_DIR_PRODUCTION/var/log
chown -R apache:apache $SERVICE_DIR_PRODUCTION/var/sessions

echo
echo_green_ts ">>> DONE!"
