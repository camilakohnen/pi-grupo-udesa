const producto = require("../db/productos");

let productController = {
    edit : function(req, res) {
        res.render('product-add');
    },
    profile : function(req, res) {
        res.render('profile');
    },
    product : function(req, res) {
        res.render('product', {lista: producto.filtrarProducto(id)});
    },
    results : function(req, res) {
        res.render('search-results', {lista : producto.filtrarId(id)});
    },
};

module.exports = productController;