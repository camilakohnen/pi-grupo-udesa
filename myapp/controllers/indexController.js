const { ExpressValidator } = require("express-validator");
const db = require("../database/models");
const bcrypt = require("bcryptjs");

let indexController = {
  index: function (req, res) {
        let criterio = {
            include: [
                {association: "usuario" },
                {association: "producto"},
            ] 
        }

        db.Comentario.findAll(criterio)
          .then((results) => {
            //return res.send(results);
            return res.render("index", {"lista": db});
          }).catch((err) => {
              return console.log(err);
          })
        },

  register: function (req, res) {
    res.render('register');
  },

  store: function (req, res) {
    let form = req.body;
    let errores = ExpressValidator(req);
    if (errores.isEmpty()) {
      let form = req.body ;
      let user = {
          usuario: form.usuario,
          mail: form.mail,
          contraseña: bcrypt.hashSync(form.contraseña, 10)
      }
    }else{
        return res.render("register", {
          errores: errores.mapped(),
          old:req.body
        })
      }
    db.Usuario.create(user)
    .then((result) => {
      return res.redirect("/login");
    }).catch((err) => {
      return console.log(err);
    });
  },

  login: function (req, res) {
    res.render('login');
  },

 store: function(req, res) {
    let form = req.body;
    db.Usuario.create(form)
    .then((result) => {
        return res.redirect("/product")
    }).catch((err) => {
        return console.log(err);
    });
  },
  logOut: function(req, res) {
    req.session.destroy();
    return res.redirect("/")
  }
};

module.exports = indexController;