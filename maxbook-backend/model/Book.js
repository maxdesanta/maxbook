'use strict'

/*
    * sql init from config
    * class book init
*/


// init mysql
const sql = require('../config/db');

// bikin class buku
class Book {
    // constructor
    constructor(id,judul,label,author,genre,publisher,isbn,year,harga,stok,created_at,updated_at) {
        this.id = id;
        this.judul = judul;
        this.label = label;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.isbn = isbn;
        this.year = year;
        this.harga = harga;
        this.stok = stok;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    // method
    /* tampilkan semua buku
        ========================
        bikin koneksi
        query sql
        lihat result
        rubah ke objek instance
        kirim ke controller
    */
    static tampilkanSemuaBuku(result) {
        let sqlQuery = `SELECT * FROM buku`;
        sql.query(sqlQuery, (err, res) => {
            if (err) {
                console.log('error => ', err);
                result(err, null);
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach((eachData) => {
                    book = new Book(
                        eachData.id,
                        eachData.judul,
                        eachData.label,
                        eachData.author,
                        eachData.genre,
                        eachData.publisher,
                        eachData.isbn,
                        eachData.year,
                        eachData.harga,
                        eachData.stok,
                        eachData.created_at,
                        eachData.updated_at
                    );
                    books.push(book);
                });
                console.log('result', res)
                result(null, books);
            }
        });
    }
    // tempilkan semua buku berdasarkan id
    static cariBukuBerdasarkanId(id,result) {
        let sqlQuery = `SELECT * FROM buku WHERE id = ${id}`;

        sql.query(sqlQuery, (err, res) => {
            if (err) {
                console.log('error => ', err);
                result(err,null);
            } else {
                let rawData = res;
                let books = [];
                let book;
                rawData.forEach((eachData) => {
                    book = new Book(
                        eachData.id,
                        eachData.judul,
                        eachData.label,
                        eachData.author,
                        eachData.genre,
                        eachData.publisher,
                        eachData.isbn,
                        eachData.year,
                        eachData.harga,
                        eachData.stok,
                        eachData.created_at,
                        eachData.updated_at
                    );
                    books.push(book);
                });
                console.log('result', res)
                result(null, books);
            }
        });
    }
    // upload buku baru
    static tambahBuku(data, result) {
        let sqlQuery = `INSERT INTO buku SET ?`;

        sql.query(sqlQuery, data, (err, res) => {
            if (err) {
                console.log('error => ', err);
                result(err,null);
            } else {
                console.log('result')
                result(null, true);
            }
        });
    }
    // mengubah data buku
    static editBuku(id, data, result) {
        /* call other variables */
        let date = new Date();
        let updatePayload = data;
        updatePayload.updated_at = date;

        /* sql query */
        let sqlQuery = `UPDATE buku SET ? WHERE id = ${id}`;

        /* ganti buku baru */
        sql.query(sqlQuery, updatePayload, (err, res) => {
            if (err) {
                console.log('error => ', err);
                result(err,null);
            } else {
                console.log('result')
                result(null, res);
            }
        });
    }

    // hapus buku
    static hapusBuku(id, result) {
        /* sql query */
        let sqlQuery = `DELETE FROM buku WHERE id = ${id}`;

        /* hapus buku */
        sql.query(sqlQuery, id, (err, res) => {
            if (err) {
                console.log('error => ', err);
                result(err,null);
            } else {
                console.log('result')
                result(null, true);
            }
        });
    }
}

// module export
module.exports = {
    Book
}