const data = require("../db/data");

let productController = {
    edit : function(req, res) {
        res.render('product-add');
    },
    profile : function(req, res) {
        res.render('profile', {lista: data.productos});
    },
    product : function(req, res) {
        res.render('product');
    },
    results : function(req, res) {
        let id = data.productos.id
        res.render('search-results');
    },
    add : function(req, res) {
        res.render('product-add');
    },
};

module.exports = productController;