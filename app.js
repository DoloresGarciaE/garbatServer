/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const environmentVariables = require('./config/environmentConfig');
const db = require('./models/index');
const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(routes);

db.connection(environmentVariables.DB.DB_URI)
  .then(() => {
    console.log('Database connection successfully');
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
