'use strict'

// init express
const express = require('express');
const router = express.Router();

// init contorller
const { Controller } = require('../controller/Controller');

// Homepage (Endpoint)
router.get('/', Controller.HomePage);

// export
module.exports = {router};