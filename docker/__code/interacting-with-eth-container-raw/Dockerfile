FROM node:lts

WORKDIR /usr/src/app

RUN yarn global add ganache-cli
RUN yarn global add solc

COPY package.json ./
COPY yarn.lock ./
RUN yarn

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]

## Experimental...
## ENTRYPOINT tail
## FROM ethereum/solc:stable
## Only copy package.json to take advantage of Docker layers (http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/)
