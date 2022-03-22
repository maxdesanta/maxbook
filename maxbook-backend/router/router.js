'use strict'

// init express
const express = require('express');
const router = express.Router();

// init contorller
const { Controller } = require('../controller/Controller');

// init other router
const { bookRouter } = require('./BookRouter');

// Homepage (Endpoint)
router.get('/', Controller.HomePage);
router.use('/books', bookRouter);

// export
module.exports = {router};