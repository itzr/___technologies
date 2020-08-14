Source: https://medium.com/swlh/how-to-develop-your-node-js-docker-applications-faster-aa75f89701f7

Use: 
- Host Volumes
- Nodemon

Aim: Change container code without a rebuild
Solution: use a Docker host volume

Host volumes sync file changes between a local host folder and a container folder.

If you use a host volume, any edits will automatically appear in the container.

Use Nodemon to automatically restart the application

-------
1. docker-compose.yml

volumes:
  "/path-to-laptop-folder:/path-to-container-folder"
  
-------
2. dockerfile

RUN npm install -g nodemon
RUN npm installENTRYPOINT ["nodemon", "/usr/src/app/server.js"]
