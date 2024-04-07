

let productController = {
    productAdd : function(req, res) {
        res.render('product-add.ejs');
    },
    profile : function(req, res) {
        res.render('profile.ejs');
    },
    product : function(req, res) {
        res.render('product.ejs');
    },
};

module.exports = productController;