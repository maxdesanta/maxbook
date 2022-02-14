'use strict'

// Init dotenv
require('dotenv').config();

// Init Express
const express = require('express');
const app = express();

// init other modules
const bodyParser = require('body-parser');
const cors = require('cors');

// ini port
const PORT = process.env.PORT || 3000;

// cors setup
let originOptionCors = {
    origin: `http://localhost:${PORT}`
}

app.use('/', function (req, res) {
    res.send('hello world');
})

// Port Connection
app.listen(PORT, () => `connect to server on port ${PORT}`);