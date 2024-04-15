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
    },
    product : function (req, res) {
      let id = req.params.id;
      res.render('product');
    },
};

module.exports = indexController;