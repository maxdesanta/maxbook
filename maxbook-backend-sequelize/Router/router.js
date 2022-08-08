'use strict'

// init router
const express = require('express');
const router = express.Router();

// init controller
const { Controller } = require('../Controller/Controller');

// endpoint home
router.get('/', Controller.Homepage);

module.exports = {
    router
}