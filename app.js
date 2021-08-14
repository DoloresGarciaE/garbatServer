const express = require("express");
const environmentVariables = require("./config/environmentConfig");
const db = require("./models/index");
const routes = require("./routes/index");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(routes);

db.connection(environmentVariables.DB.DB_URI)
  .then(() => {
    console.log("Database connection successfully");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
