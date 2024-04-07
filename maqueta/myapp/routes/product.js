var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController");

router.get("/product-add.ejs" , productController.productAdd);

router.get("/profile.ejs" , productController.profile);

router.get("/product.ejs" , productController.product);

module.exports = router;