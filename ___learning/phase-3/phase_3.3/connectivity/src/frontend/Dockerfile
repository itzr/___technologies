FROM node:12.16.0-alpine3.10

WORKDIR /app
EXPOSE 1234
CMD ["npm", "run", "dev"]

COPY package* ./
RUN npm ci
COPY . .
