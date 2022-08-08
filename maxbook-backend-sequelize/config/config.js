require('dotenv').config();

module.exports = {
    development: {
       username: process.env.USER,
       password: process.env.PASSWORD,
       database: process.env.DATABASE_DEVELOPMENT,
       host: process.env.HOST,
       dialect: process.env.DIALECT,
      },
    test: {
       username: process.env.USER,
       password: process.env.PASSWORD,
       database: process.env.DATABASE_TEST,
       host: process.env.HOST,
       dialect: process.env.DIALECT,
    },
      production: {
       username: process.env.USER,
       password: process.env.PASSWORD,
       database: process.env.DATABASE_PRODUCTION,
       host: process.env.HOST,
       dialect: process.env.DIALECT,
    }
      
}