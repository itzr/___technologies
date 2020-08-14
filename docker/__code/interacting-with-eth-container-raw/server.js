'use strict';

/**
 * Module dependencies.
 */
const express = require('express');
const dotenv = require('dotenv');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

/**
 * Controllers (route handlers).
 */
const apiController = require('./controllers/api');

/**
 * Create Express server.
 */
const app = express();

/**
 * Primary app routes.
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

/**
 * API examples routes.
 */
app.get('/api/infura', apiController.getInfura);

/**
 * Start Express server.
 */
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
