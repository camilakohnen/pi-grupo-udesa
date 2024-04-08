var express = require('express');
var router = express.Router();
var productController = require("../controllers/productController");

router.get("/" , productController.product);

router.get("/profile" , productController.profile);

router.get("/edit" , productController.edit);

module.exports = router;