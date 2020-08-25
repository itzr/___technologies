'use strict';

/**
 * Module dependencies.
 */
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
/**
 * Local dependencies.
 */
const rabbitMQ = require('./message/rabbitMQ.js')
const rabbitMQResults = require('./message/message-results/rabbitMQ-results.js')
const rabbitMQRequests = require('./message/message-requests/rabbitMQ-requests.js')
/**
 * Define Constants
 */
const PORT = 80;
const HOST = '0.0.0.0';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

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
  res.send('Hello World');
});

/**
 * Run server
 */
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

/**
 * Listen for results on RabbitMQ
 * RABBIT ALREADY RUNNING
 */
// setTimeout(() =>
//     rabbitMQ.setup()
//     , 60000)

rabbitMQ.setup()
rabbitMQRequests.listenForMessages()
rabbitMQResults.listenForResults();
