const data = require("../database/models");

db.Productos.findAll()
.then((results)=>{
  return res.render("index")
}).catch((err)=>{

})

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