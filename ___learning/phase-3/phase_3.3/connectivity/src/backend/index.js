'use strict';
/**
 * Module dependencies.
 */
const express = require('express')
const path = require('path');
const pino = require('pino');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
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
const PORT = 1234

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
 * Apply Middleware
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 */
app.use(cors());

/**
 * Primary app routes.
 */
app.get('/', (req, res) => res.send(echo('Hello World, 2nd Time.!')))
app.get('/one', (req, res) => res.send(echo('I am one!')))
app.get('/two', (req, res) => res.send(echo('I am two!')))
app.get('/_healthz', (req, res) => res.send(echo(`I'm healthy bru.`)))

/**
 * Start the Server
 */
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
