'use strict';

console.log("RESET!")

/**
 * Module dependencies.
 */
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
/**
 * Local dependencies.
 */
const rabbitMQ = require('./utils/message-broker/rabbitMQ.js')
const rabbitMQResults = require('./utils/message-broker/message-results/rabbitMQ-results.js')
const rabbitMQRequests = require('./utils/message-broker/message-requests/rabbitMQ-requests.js')

/**
 * Define Constants
 */
const PORT = 3000;
const HOST = '0.0.0.0';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

/**
 * Controllers (route handlers).
 */
const apiRabbitMQController = require('./controllers/api/rabbitMQ');

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
 * Primary app routes.
 */
app.get('/', (req, res) => {
    res.send('Hello World, itzr is back from holiday');
});

/**
 * API examples routes.
 */
app.get('/api/v1/test-rabbit', apiRabbitMQController.getRabbitTest),

/**
 * Run server
 */
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

/**
 * Hack for production: Wait to listen for results on RabbitMQ
 */
// setTimeout(() =>
//     rabbitMQ.setup()
//     , 60000)

rabbitMQ.setup()
rabbitMQRequests.listenForMessages()
rabbitMQResults.listenForResults();
