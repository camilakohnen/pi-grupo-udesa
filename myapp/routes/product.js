var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController");
const { body } = require ("express-validator");


let validacionesProducto = [
    body("fotoProducto")
      .notEmpty().withMessage("Debe ingresar una imagen").bail(),
    body("nombreProducto")
      .notEmpty().withMessage("Debe ponerle un nombre a su producto").bail()
      .isLength({min:1}).withMessage("El nombre debe ser más largo"),
    body("descripcionProducto")
      .notEmpty().withMessage("Debe ponerle una descripcion a su producto").bail(),
  ];

  router.get("/id/:id" , productController.product);

  router.post("/id/:id" , validacionesComentario, productController.comment);

  router.get("/edit/id/:id" , productController.edit);
  
  router.post("/edit/id/:id" , validacionesProducto, productController.editPost);
  
  router.get("/searchResults" , productController.searchResults);
  
  router.get("/add/:id" , productController.add);
  
  router.post("/add/:id" ,validacionesProducto, productController.addPost);

module.exports = router;