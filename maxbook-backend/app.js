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
const { bookRouter } = require('./router/BookRouter');

// ini port
const port = process.env.PORT || 3000;

// Cors Option
let originOptionCors = {
    origin: `http://localhost:${port}`
};

app.use(cors(originOptionCors));

// routing
app.use('/', router);
app.use('/books', bookRouter);

// Port Connection
app.listen(port, () => `Port connected on ${port}`);