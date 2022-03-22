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
    constructor(id,judul,label,author,genre,publisher,isbn,year,price,stok,created_at,updated_at) {
        this.id = id;
        this.judul = judul;
        this.label = label;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.isbn = isbn;
        this.year = year;
        this.price = price;
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
            } else {
                console.log('result', res);
            }
        });
    }
    // tempilkan semua buku berdasarkan idan
    // upload buku baru
    // mengubah data buku
    // hapus buku
}

module.exports = {
    Book
}