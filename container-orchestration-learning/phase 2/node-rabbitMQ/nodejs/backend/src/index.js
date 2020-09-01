'use strict';

console.log("RESET!!!")

/**
 * Module dependencies.
 */
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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
