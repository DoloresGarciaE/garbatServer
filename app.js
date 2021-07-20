const express = require("express");
const environmentVariables = require("./config/environmentConfig");
const db = require("./models/index");

const app = express();

db.connection(environmentVariables.DB.DB_URI)
  .then(() => {
    console.log("Database connection successfully");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
