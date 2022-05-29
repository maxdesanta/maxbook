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

    // static tambah buku
    static AddBook(req, res) {
        let payload = req.body;
        // payload.harga = +req.body.harga;
        // payload.stok = +req.body.stok;

        // check empty data 
        for (const each in payload) {
            if (!payload[each]) {
                payload[each] = null;
            }
        }

        console.log(payload, 'ini payload');

        Book.tambahBuku(payload, (err, data) => {
            if (err) {
                console.log('controller error');
            } else {
                res.json({
                    title: 'tambah data buku',
                    message: 'berhasil ditambahkan',
                    status: 200,
                    data,
                });
            }
        });    
    }

    // static update buku
    static UpdateBook(req, res) {
        let payLoad = req.body;
        let id = req.params.id;

        Book.editBuku(id, payLoad, (err, data) => {
            if (err) {
                console.log('controller error');
            } else {
                res.json({
                    title: 'edit buku',
                    message: 'buku sudah di edit',
                    status: 200,
                    data
                })
            }
        })
    }

    // static hapus Buku
    static DeleteBook(req, res) {
        let id = req.params.id;

        Book.hapusBuku(id, (err, data) => {
            if (err) {
                console.log('controller error');
            } else {
                res.json({
                    title: 'hapus buku',
                    message: 'buku sudah di hapus',
                    status: 200,
                    data
                })
            }
        })
    }

}

// module.export
module.exports = {
    BookController
};