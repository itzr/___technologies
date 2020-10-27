### Guide

https://medium.com/@xiaolishen/develop-in-docker-a-node-backend-and-a-react-front-end-talking-to-each-other-5c522156f634

### Issues:

https://github.com/facebook/create-react-app/issues/8688

* fix was `stdin_open: true` - from here: https://docs.docker.com/compose/compose-file/

### Backend integration

https://create-react-app.dev/docs/proxying-api-requests-in-development/

In `package.json`, set `proxy' to:
- Option 1 (fail):  http://server:8080/
- Option 2 (?):  http://0.0.0.0:49160
