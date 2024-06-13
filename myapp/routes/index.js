var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController");
const { body } = require ("express-validator");
const db = require("../database/models")

let validacionesRegistracion = [
  body("usuario")
    .notEmpty().withMessage("Debe completar el nombre").bail()
    .isLength({min:5}).withMessage("El nombre debe ser más largo"),
  body("mail")
    .notEmpty().withMessage("Debe completar el mail").bail()
    .isEmail().withMessage("Debe completar con un email válido"),
  body("contrasenia")
    .notEmpty().withMessage("Debe poner una contraseña").bail()
    .isLength({min:4}).withMessage("La contraseña debe ser más larga"),
  body("fecha")
    .notEmpty().withMessage("Debe completar este campo").bail(),
  body("dni")
    .notEmpty().withMessage("Debe completar el documento").bail()
    .isLength({min:7}).withMessage("Debe ingresar un documento válido"),
]

let validacionesLogin = [
    body("mail")
        .custom(function(results){
            return db.Usuario.findOne({
                where: {mail: results},
            })
            .then(function(mail){
                if (!mail){
                    throw new Error("El mail ingresado no existe")
                }
            })
        }),
    body("contrasenia")
        .custom(function(results){
            return db.Usuario.findOne({
                where: {contrasenia: results}, 
            })
            .then(function(contrasenia){
                if (contrasenia == undefined){
                    throw new Error("La contraseña ingresada no existe")
                }
            })
        })
]



/* GET home page. */
router.get('/', indexController.index);

router.get("/register" , indexController.register);

router.post("/register" , validacionesRegistracion, indexController.store);

router.get("/index" , indexController.index);

router.get("/login" , indexController.login);

router.post("/login" , validacionesLogin, indexController.loginpost);

router.post('/logout', indexController.logOut);

module.exports = router;

