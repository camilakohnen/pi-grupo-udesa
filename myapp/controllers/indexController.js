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

};

module.exports = indexController;