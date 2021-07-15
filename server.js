const express = require('express');
const http = require('http');
const app = express();

app.listen(3000, () => {
    console.log("Listening on port 3000");
});