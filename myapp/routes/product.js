var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController");

router.get("/id/:id" , productController.product);

router.get("/edit" , productController.edit);

router.get("/results/:id?" , productController.results);

router.get("/add" , productController.add);

module.exports = router;