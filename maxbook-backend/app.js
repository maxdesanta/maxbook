'use strict'

/*
    * Express init
    * Setting Port
    * *Dotenv init
    * Body Parser
*/

// Init dotenv
require('dotenv').config();

// Init Express
const express = require('express');
const app = express();

// init other modules
const bodyParser = require('body-parser');
const cors = require('cors');

// require router
const {router} = require('./router/router');


// init port
const port = process.env.PORT || 3000;

// Cors Option
let originOptionCors = {
    origin: `http://localhost:${port}`
};

app.use(cors(originOptionCors));

// routing
app.use('/', router);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Port Connection
app.listen(port, () => `Port connected on ${port}`);