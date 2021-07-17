const express = require("express");
const environmentVariables = require("./config/environmentConfig");

const app = express();

app.set("port", environmentVariables.EXPRESS.PORT);

app.use(express.json());

app.listen(environmentVariables.EXPRESS.PORT, () => {
  console.log("Listening on port", environmentVariables.EXPRESS.PORT);
});
