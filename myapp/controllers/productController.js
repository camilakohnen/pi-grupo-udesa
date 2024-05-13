const data = require("../database/models");

let productController = {
    edit : function(req, res) {
        res.render('product-add', {usuario : data.usuario});
    },
    profile : function(req, res) {
        res.render('profile', {lista: data.productos});
    },
    product : function(req, res) {
        res.render('product', {producto: data.productos[0]});
    },
    results : function(req, res) {
        let id = data.productos.id
        res.render('search-results', {lista : data.productos});
    },
    add : function(req, res) {
        res.render('product-add', {usuario : data.usuario});
    },
};

module.exports = productController;