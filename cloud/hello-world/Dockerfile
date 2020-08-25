FROM node:lts

WORKDIR /usr/src/app

#RUN yarn global add nodemon

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]
