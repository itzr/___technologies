BOILERPLATE EXAMPLE

1. docker build --tag bulletinboard:1.0
2. docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0

# RUN AND KEEP ACTIVE

 docker run -t -d --name test_node node:current-slim
