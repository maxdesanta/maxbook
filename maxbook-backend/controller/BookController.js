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
            } else {
                res.json(data);
            }
        });
    }

    // static cari buku berdasarkan ID 
    static findAllBooksById(req, res) {
        const { id } = req.params;
        Book.cariBukuBerdasarkanId(id, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });    
    }

    // static cari buku berdasarkan ID 
    static AddBook(req, res) {
        const payload = req.body;
        Book.tambahBuku(payload, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        });    
    }

    // static UpdateBook(req, res) {
    //     res.send('ini halaman edit buku');
    // }
}

// module.export
module.exports = {
    BookController
};