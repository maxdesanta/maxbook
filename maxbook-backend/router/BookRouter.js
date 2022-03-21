'use strict'

// init express
const express = require('express');
const bookRouter = express.Router();

// init bookContorller
const { BookController } = require('../Controller/BookController');

// Homepage (Endpoint)
bookRouter.get('/',  BookController.findAllBooks);

// export
module.exports = {bookRouter};