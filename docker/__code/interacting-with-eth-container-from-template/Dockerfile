FROM node:lts

WORKDIR /starter
ENV NODE_ENV development

RUN yarn global add ganache-cli

COPY package.json /starter/package.json
COPY yarn.lock /starter/yarn.lock

RUN yarn

COPY .env.example /starter/.env.example
COPY . /starter

EXPOSE 8080

CMD ["yarn","start"]
