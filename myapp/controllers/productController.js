const productos = require("../db/productos");

let productController = {
    edit : function(req, res) {
        res.render('product-add');
    },
    profile : function(req, res) {
        res.render('profile', {lista: productos.lista});
    },
    product : function(req, res) {
        res.render('product');
    },
    results : function(req, res) {
        let id = productos.lista.id
        res.render('search-results');
    },
    add : function(req, res) {
        res.render('product-add');
    },
};

module.exports = productController;