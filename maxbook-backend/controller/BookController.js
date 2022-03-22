'use strict'

// panggil model di controller
const { Book } = require('../model/Book');

// class controller
class BookController {
    // static find all book
    static findAllBooks(req,res) {
        Book.tampilkanSemuaBuku((err, data) => {
            if (err) {
                console.log('Controller error');
                result(err, null);
            } else {
                console.log('data', data);
                result(null, res);
            }
        });
    }
}

// module.export
module.exports = {
    BookController
};