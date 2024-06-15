const { Association } = require("sequelize");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

let profileController = {
    
    profile : function(req, res) {
        let id = req.params.id;
        let criterio = {
            include: [
                {association: "producto" },
                {association: "comentario", include:[
                    {association: "producto" },
                ] },
            ] 
        }

        db.Usuario.findByPk(id, criterio)
        .then((results)=> {
            return res.send(results);
        }).catch((err) => {
             return console.log(err);
         });
        // res.render('profile', {lista: db.productos, usuario : db.usuario});
    },
    edit : function(req, res) {
        res.render('profile-edit', {usuario : db.usuario});
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

    logOut: function(req, res) {
        req.session.destroy();
        res.clearCookie("userId")
        return res.redirect("/")
      }
}
module.exports = profileController;