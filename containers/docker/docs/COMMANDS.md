# Commands

see volumes: `docker volume ls`
create a volume: `docker volume create my-vol`
inspect a volume: `docker volume inspect my-vol`
remove a volume: `docker volume rm <vol-name>`
start a container with a volume (-mount): 
```bash
docker run -d \
  --name devtest \
  --mount source=myvol2,target=/app \
  nginx:latest
```
start a container with a volume (-v): 
```bash
docker run -d \
  --name devtest \
  -v myvol2:/app \
  nginx:latest
```
start a service with a volume:
```bash
docker service create -d \
  --replicas=4 \
  --name devtest-service \
  --mount source=myvol2,target=/app \
  nginx:latest
```
**None of the containers can share this data**
**if you use the local volume driver**

*When mounting to a service, must use -mount, not -v*


# Understanding how an image was built
To understand how a docker image was built, use:
```
docker history --no-trunc.
```

## WHAT WORKED

Server with Node and Express: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
`docker build -t <your username>/node-web-app .`
`docker-compose down && docker-compose up --build` (it method) OR `docker run -p 49160:8080 -d <your username>/node-web-app` (guide)
`docker ps`
`docker logs <container id>`
`docker exec -it <container id> /bin/bash`
`curl -i localhost:49160`

* Only different is that I used docker-compose and do the port forwarding there.

### Check Logs

Option 1

`pred='process matches ".*(ocker|vpnkit).*"
   || (process in {"taskgated-helper", "launchservicesd", "kernel"} && eventMessage contains[c] "docker")'
 /usr/bin/log stream --style syslog --level=debug --color=always --predicate "$pred"`

Option 2

`$ pred='process matches ".*(ocker|vpnkit).*" || (process in {"taskgated-helper", "launchservicesd", "kernel"} && eventMessage contains[c] "docker")'`
`$ /usr/bin/log stream --style syslog --level=debug --color=always --predicate "$pred"`

------------------------

## BOILERPLATE EXAMPLE

1. docker build --tag bulletinboard:1.0
2. docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0

# RUN AND KEEP ACTIVE

 docker run -t -d --name test_node node:current-slim
