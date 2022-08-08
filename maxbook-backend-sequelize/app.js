'use strict'

require('dotenv').config();

// init express
const express = require('express');
const app = express();

// init antoher module
const cors = require('Cors');
const { router } = require('./Router/router')
const { sequelize } = require('./models');

// init port
const port = process.env.PORT || 3000;

// Cors Option
let originOptionCors = {
    origin: `http://localhost:${port}`
};

// test route
app.use('/', router);

// Port Connection
app.listen(port, () => `Port connected on ${port}`);