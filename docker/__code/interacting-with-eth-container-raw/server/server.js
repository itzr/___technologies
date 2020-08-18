'use strict';

/**
 * Module dependencies.
 */
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Constants
const PORT = 8080;
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
const apiController = require('./controllers/api');

/**
 * Create Express server.
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/api/infura/compound', apiController.getCompound)
app.get('/api/db/post/test', apiController.getDBPost)
app.get('/api/db/get/test', apiController.getDBGet)

/**
 * Start Express server.
 */
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
