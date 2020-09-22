'use strict';

console.log("RESET!!!")

/**
 * Module dependencies.
 */
const express = require('express')
const path = require('path');
const grpc = require('grpc');
const pino = require('pino');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

/**
 * Local dependencies.
 */
const { echo } = require('./utils/index.js');

/**
 * Load environment variables
 */
dotenv.config({ path: '.env' });

/**
 * Define Constants
 */
const PROTO_PATH = path.join(__dirname, './proto/demo.proto');
const PORT = 7777

/**
 * Schema dependencies.
 */
const Proposal = require('./models/Proposal.js')

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once('open', function() {
    console.log(`We're connected to MongoDB Atlas (in the cloud...)!`)
});
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
});

/**
 * Load gRPC clients
 */
// const helloWorldProto = grpc.loadPackageDefinition(PROTO_PATH).degovapplication;
// TODO: This should be an ENV variable
// const HELLO_WORLD_SERVICE='helloservice:7001'
// const client = new helloWorldProto.HelloWorldService(HELLO_WORLD_SERVICE,
//     grpc.credentials.createInsecure());

/**
 * Initiate Logger
 */
const logger = pino({
    name: 'backend',
    messageKey: 'message',
    levelKey: 'severity',
    useLevelLabels: true
});

/**
 * Create Express server.
 */
const app = express();

/**
 * Apply Middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Apply Middleware (TEMPORARY?)
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 */
app.use(cors());

/**
 * Primary app routes.
 */
app.get('/', (req, res) => res.send(echo('Hello World, 2nd Time.!')))

// app.get('/hello', (req, res) => {
//     client.getHelloWorld({}, (err, response) => {
//         if (err) {
//             logger.error(`Something went wrong: ${err}`);
//         } else {
//             logger.info(`Response: ${response.message}`)
//             res.send(`Response: ${response.message}`)
//         }
//     })
// })

app.get('/_healthz', (req, res) => res.send(echo(`I'm healthy bru.`)))

// TODO: optimise to send only description, id and proposer.
app.get('/api/v1/list/compound-finance/proposals', (req, res, next) => {
    // return everything for now
    Proposal.find({}, function (err, proposals) {
        if (err) return next(new Error(JSON.stringify(err)));
        res.send(proposals)
    })
})

/**
 * Dummy Routes
 */
app.post('/api/v1/post-dummy-data/compound-finance/proposals', (req, res, next) => {
    const fakeProposal = new Proposal({
        proposalId: 12345, // uint
        proposer: 0x123, // address
        targets: [0x234,0x345], // of addresses
        values: [1,2,3], // of unit,
        signatures: ['1sgoq3254'], // of strings
        calldatas: ['10agAGzfb'], // of bytes
        startBlock: 1, // uint
        endBlock: 2, // uint
        description: 'fakeProposal'
    });
    fakeProposal.save(function (err, proposal) {
        if (err) return next(new Error(JSON.stringify(err)));
        console.log('saving')
        res.send(proposal)
    });
});

/**
 * Start the Server
 */
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
