## WHAT WORKED

Server with Node and Express: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
`docker build -t <your username>/node-web-app .`
`docker run -p 49160:8080 -d <your username>/node-web-app`
`docker ps`
`docker logs <container id>`
`docker exec -it <container id> /bin/bash`
`curl -i localhost:49160`

* Only different is that I used docker-compose and do the port forwarding there.

------------------------

## BOILERPLATE EXAMPLE

1. docker build --tag bulletinboard:1.0
2. docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0

# RUN AND KEEP ACTIVE

 docker run -t -d --name test_node node:current-slim
