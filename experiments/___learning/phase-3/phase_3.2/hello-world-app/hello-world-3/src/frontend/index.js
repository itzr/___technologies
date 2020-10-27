const express = require('express')
const path = require('path');
const grpc = require('grpc');
const pino = require('pino');

const { echo } = require('./utils/index.js');
const app = express()

const PROTO_PATH = path.join(__dirname, './proto/demo.proto');
const PORT = 7777

const helloWorldProto = grpc.load(PROTO_PATH).hipstershop;

// TODO: This should be an ENV variable
const HELLO_WORLD_SERVICE='helloservice:7001'
const client = new helloWorldProto.HelloWorldService(HELLO_WORLD_SERVICE,
    grpc.credentials.createInsecure());

const logger = pino({
    name: 'frontend',
    messageKey: 'message',
    changeLevelName: 'severity',
    useLevelLabels: true
});

app.get('/', (req, res) => res.send(echo('Hello World, 2nd Time.!')))
app.get('/hello', (req, res) => {
    client.getHelloWorld({}, (err, response) => {
        if (err) {
            logger.error(`Something went wrong: ${err}`);
        } else {
            logger.info(`Response: ${response.message}`)
            res.send(`Response: ${response.message}`)
        }
    })
})
app.get('/_healthz', (req, res) => res.send(echo(`I'm healthy bru.`)))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
