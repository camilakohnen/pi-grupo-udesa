const { Association } = require("sequelize");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

let profileController = {

    profile : function(req, res) {
        let id = req.params.id;
        let criterio = {
            include: [
                {association: "producto"},
                {association: "comentario", include:[
                    {association: "producto" },
                ] },
            ],
        order : [[{model: db.Producto, as: 'producto'}, 'createdAt', 'DESC']]
        }
        db.Usuario.findByPk(id, criterio)
        .then((results)=> {
          // return res.send(results)
          return res.render("profile", {"lista": results});
        }).catch((err) => {
            return console.log(err);
         });

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
            return res.redirect("/profile/login");
            }).catch((err) => {
            return console.log(err);
            });
        }else{
            //  return res.send(errores)
            return res.render("register", {errores: errores.mapped(), old:req.body });
        }
    },

    edit : function(req, res) {
        res.render('profile-edit', {usuario : db.usuario});
    },

    editPost: function(req, res) {
      let iD = req.params.id;
      let errores = validationResult(req);
      if (errores.isEmpty()) {
        let form = req.body ;
        let user = {
            mail : form.mail,
            fecha : form.fecha,
            dni : form.dni,
            fotoUsuario : form.fotoUsuario,
        }
        if (form.contrasenia && form.contrasenia.length >= 4) {
          user.contrasenia = bcrypt.hashSync(form.contrasenia, 10);
        }
        db.Usuario.update(user, {where : {id : iD}})
          .then((results) => {
            return db.Usuario.findByPk(iD);
          })
          .then((updatedUser) => {
            req.session.user = updatedUser;
            return res.redirect("/index");
          })
          .catch((err) => {
            return console.log(err);
          });
      } else {
          return res.render("profile-edit", {errores: errores.mapped(), old:req.body });
      }
    },

    login: function (req, res, next) {
      if (req.session.user != undefined){
        return res.redirect("/");
      } else {
        return res.render("login")
      }
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
              return res.render("login", {errores: errores.mapped(), old: req.body})
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
}

module.exports = profileController;