'use strict'

class Controller {
    static Homepage(req, res) {
        res.send('welcome to homepage');
    }
}

module.exports = {
    Controller
}