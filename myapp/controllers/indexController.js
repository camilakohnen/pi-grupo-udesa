const data = require("../db/data");

let indexController = {
    index : function(req, res, next) {
        res.render('index' , {lista: data.productos});
      },
    register : function (req, res) {
        res.render('register');
    },
    login : function (req, res) {
      res.render('login');
    }
};

module.exports = indexController;