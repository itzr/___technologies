#!/bin/bash

LANG="C"

CL_RED="\e[01;31m"
CL_GREEN="\e[00;32m"
CL_YELLOW="\e[01;33m"
CL_CYAN="\e[01;96m"
CL_OFF="\e[00m"

# FUNCTIONS
echo_green() {
    echo -e "${CL_GREEN}${@}${CL_OFF}"
}

echo_yellow() {
    echo -e "${CL_YELLOW}${@}${CL_OFF}"
}

echo_red() {
    echo -e "${CL_RED}${@}${CL_OFF}"
}

ME=$(basename $0)
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

REPO="..."
DEPLOYMENT_KEY="/root/.ssh/...-key"
STG_ENV_BASE_DIR="/opt/..."
STG_ENV_NAME=""
VERSION=""

for i in "$@"; do
    case "$i" in
        -e|--env ) STG_ENV_NAME=$2; shift 2;;
        -v|--version ) VERSION=$2; shift 2;;
    esac
done

STG_ENV_FULL_DIR=${STG_ENV_BASE_DIR}/${STG_ENV_NAME}
SYSTEMD_NAME=<DIR>-${STG_ENV_NAME}
DOCKER_COMPOSE_CONFIG=docker-compose.test-${STG_ENV_NAME}.yml

if [ "$VERSION" = "" ]; then
    echo
    echo_red ">>> ERROR - ENTER V6 VERSION TO DEPLOY (--version [master|{commit}|{tag}|{branch}])"
    exit
fi

if [ "$STG_ENV_NAME" = "" ]; then
    echo
    echo_red ">>> ERROR - ENTER STG ENV NAME (--env ....)"
    exit
fi

if [ ! -d "${STG_ENV_FULL_DIR}" ]; then
    echo
    echo_red ">>> ERROR - NO SUCH ENV IN LOCATION: ${CL_YELLOW}${STG_ENV_FULL_DIR}"
    exit
fi

IS_TAG=0
if [ $VERSION != "master" ]; then
    echo
    echo_green ">>> CHECKING IF BRANCH / TAG EXISTS"
    ALL=`ssh-agent bash -c "ssh-add $DEPLOYMENT_KEY 2>/dev/null; git ls-remote --heads --tags $REPO"`
    EXISTS=`grep "refs/tags/${VERSION}" <<< "$ALL"`
    if [ -z "$EXISTS" ]; then
        EXISTS=`grep "refs/heads/${VERSION}$" <<< "$ALL"`
        if [ -z "$EXISTS" ]; then
            echo
            echo_red ">>> REQUESTED VERSION DOESN'T EXIST"
            exit 1
        fi
    else
       IS_TAG=1
    fi
fi

echo
echo_green ">>> RUNNING DEPLOYMENT - VERSION: ${CL_YELLOW}${VERSION}${CL_GREEN} - ENV: ${CL_YELLOW}${STG_ENV_NAME}"
sleep 5

echo
echo_green ">>> STOPPING RUNNING ENV"
systemctl stop ${SYSTEMD_NAME}

echo
echo_green ">>> UPDATING REPOSITORY"
sudo -u root bash << EOF
    ssh-agent bash -c "ssh-add $DEPLOYMENT_KEY 2>/dev/null; cd $STG_ENV_FULL_DIR; git fetch origin; git reset --hard origin/master; git fetch"
EOF

echo
echo_green ">>> CHECKING OUT ${CL_YELLOW}$VERSION"
cd $STG_ENV_FULL_DIR
if [ $IS_TAG -eq 0 ]; then
    git checkout origin/$VERSION 2>&1
else
    git checkout $VERSION 2>&1
fi

echo
echo_green ">>> REBUILDING CONTAINERS"
cd "$STG_ENV_FULL_DIR"
rm -rf var/cache/*
docker-compose -f ${DOCKER_COMPOSE_CONFIG} pull
docker-compose -f ${DOCKER_COMPOSE_CONFIG} build

echo
echo_green ">>> STARTING UPDATED ENV"
systemctl start ${SYSTEMD_NAME}

echo
echo_green ">>> INSTALLED VERSION: ${CL_YELLOW}`cd "$STG_ENV_FULL_DIR"; git log --decorate | head -n1 2>&1`"

if [ -e ${STG_ENV_BASE_DIR}/<DIR>-${STG_ENV_NAME}.info ]; then
    echo
    echo_green "`cat ${STG_ENV_BASE_DIR}/<DIR>-${STG_ENV_NAME}.info`"
fi
