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

app.use(
    cors({
        origin : '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue : false,
        optionsSuccessStatus: 204,
    })
);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routing
app.use('/', router);

// Port Connection
app.listen(port, () => `Port connected on ${port}`);