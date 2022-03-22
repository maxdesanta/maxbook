'use strict'

// init mysql dan dbConfig
const mysql = require('mysql');
const DBConfig = require('./db.config');

// create connection
const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB,
});

// open mysql Connection
connectDB.connect(err => {
    if (err) throw err;
    console.log('database connected');
})

// module exports
module.exports = connectDB;