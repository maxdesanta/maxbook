'use strict'

// class controller
class Controller {
    // static method
    static HomePage(req,res) {
        res.send('ini adalah controller homepage');
    }
}

// module.export
module.exports = {
    Controller
};