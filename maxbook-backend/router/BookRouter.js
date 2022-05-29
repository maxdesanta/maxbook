'use strict'

// init express
const express = require('express');
const bookRouter = express.Router();

// init bookContorller
const { BookController } = require('../Controller/BookController');

// show all book (Endpoint)
bookRouter.get('/', BookController.findAllBooks);

// show books id (Endpoint)
bookRouter.get('/:id', BookController.findAllBooksById);

// add book (Endpoint)
bookRouter.post('/add', BookController.AddBook);

// update book by id (Endpoint)
bookRouter.put('/update/:id', BookController.UpdateBook);

// delete book by id (Endpoint)
bookRouter.delete('/delete/:id', BookController.DeleteBook);


// export
module.exports = {bookRouter};