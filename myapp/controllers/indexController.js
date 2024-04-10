
let indexController = {
    index : function(req, res, next) {
        res.render('index' , {lista: productos.lista});
      },
    register : function (req, res) {
        res.render('register');
    },
    login : function (req, res) {
      res.render('login');
    },
    product : function (req, res) {
      res.render('product');
    },
};

module.exports = indexController;