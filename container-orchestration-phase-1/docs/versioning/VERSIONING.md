## docker
- use the commit hash as the image tag.
- use makefile

Example:
build `docker build -t acmecorp/foo:ff613f07328fa6cb7b87ddf9bf575fa01b0d8e43 .`
tag: `docker tag acmecorp/foo:ff613f07328fa6cb7b87ddf9bf575fa01b0d8e43 acmecorp/foo:latest`
push to repo: `docker push acmecorp/foo`
get shorthash: `git log -1 --pretty=%h` (can not do this in this repo since we are using a submodule)
(with makefile example): `make build push`
(with makefile and cicd pipeline): `make login` `make build push`
*Don't forget to add the DOCKER_USER and the DOCKER_PASS environment variables to your pipeline, otherwise the login task will not work.*

## kubernetes & helm

Every chart must have a version number.
A version must follow the SemVer 2 standard.
