var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController");
const { body } = require ("express-validator");
const db = require("../database/models")

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

router.get("/index" , indexController.index);

router.post("/login" , validacionesLogin, indexController.loginpost);

module.exports = router;

