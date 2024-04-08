
let indexController = {
    index : function(req, res, next) {
        res.render('index.ejs');
      },
    register : function (req, res) {
        res.render('register.ejs');
    },
    login : function (req, res) {
      res.render('login.ejs');
    },
    product : function (req, res) {
      res.render('product.ejs');
    },
};

module.exports = indexController;