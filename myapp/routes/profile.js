var express = require('express');
var router = express.Router();
var profileController = require("../controllers/profileController");
//var indexController = require("../controllers/indexController");
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

router.get("/id/:id" , profileController.profile);

router.get("/edit" , profileController.edit);

router.get("/register" , profileController.register);

router.post("/register" , validacionesRegistracion, profileController.store);

router.get("/login" , profileController.login);

router.post('/logout', profileController.logOut);

module.exports = router;