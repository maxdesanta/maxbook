'use strict'

// class controller
class BookController {
    // static find all book
    static findAllBooks(req,res) {
        res.send('ini adalah controller book');
    }
}

// module.export
module.exports = {
    BookController
};