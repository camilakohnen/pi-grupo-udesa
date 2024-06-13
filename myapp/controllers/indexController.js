const { validationResult } = require("express-validator");
const db = require("../database/models");
const bcrypt = require("bcryptjs");

let indexController = {
  index: function (req, res) {
        let criterio = {
            include: [
                {association: "usuarios" },
                {association: "comentario" },
            ] 
        }

        db.Producto.findAll(criterio)
          .then((results) => {
           // return res.send(results);
            return res.render("index", {"lista": results});
          }).catch((err) => {
              return console.log(err);
          })
        },

  register: function (req, res) {
    res.render('register');
  },

  store: function (req, res) {
    let errores = validationResult(req);
    if (errores.isEmpty()) {
      let form = req.body ;
      let user = {
          mail: form.mail,
          usuario: form.usuario,
          contrasenia: bcrypt.hashSync(form.contrasenia, 10),
          fecha: form.fecha,
          dni : form.dni,
          fotoUsuario: form.fotoUsuario
      }
      db.Usuario.create(user)
      .then((result) => {
        return res.redirect("/login");
      }).catch((err) => {
        return console.log(err);
      });
    }else{
        return res.render("register", {
          errores: errores.mapped(),
          old:req.body
        })
      }

  },

  login: function (req, res) {
    res.render('login');
  },

  loginpost: function (req, res) {
      let errores = validationResult(req);
      let form = req.body;
      let filtrar = {
          where: [{mail: form.mail}]
      };
      db.Usuario.findOne(filtrar)
      .then((result) => {
          if (result == null) 
            return res.render("login", {errores: errores.mapped(), old: req.body});
            let check = bcrypt.compareSync(form.contrasenia, result.contrasenia);
            if (check) {
              req.session.user = result;
              if (form.recordarme != undefined) {
                  res.cookie("userId", result.id, {maxAge: 1000 * 60 * 15});
              }
              return res.redirect("/");
            } else {
              return res.render("login", {errores: errores.mapped(), old: req.body})
            }
      }).catch((err) => {
          return console.log(err);
      });
  },

  logOut: function(req, res) {
    req.session.destroy();
    res.clearCookie("userId")
    return res.redirect("/")
  }
};

module.exports = indexController;