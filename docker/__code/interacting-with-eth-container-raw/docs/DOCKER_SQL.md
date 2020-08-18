### Set up

Using Docker and an official MongoDB container image can 
significantly shorten and simplify the database deployment process.

`docker pull mongo`

check DB with ``brew services``

By default, MongoDB stores data in the `/data/db` directory 
within the Docker container. To remedy this, mount a directory from the underlying host system to the container running the MongoDB database. 
This way, data is stored on your host system and is
 not going to be erased if a container instance fails.
 
### Guide: 

https://hub.docker.com/_/mongo

### Working Example `docker-compose.yml`

version: '3'
services:
  mongo:
    image: mongo:3.6
  web:
    build: .
    ports:
     - "49170:8080"
    environment:
     - MONGODB_URI=mongodb://mongo:27017/test
    links:
     - mongo
    depends_on:
     - mongo
    volumes:
     - .:/starter
     - /starter/node_modules
