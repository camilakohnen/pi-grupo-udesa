

let productController = {
    edit : function(req, res) {
        res.render('product-add');
    },
    profile : function(req, res) {
        res.render('profile');
    },
    product : function(req, res) {
        res.render('product');
    },
};

module.exports = productController;