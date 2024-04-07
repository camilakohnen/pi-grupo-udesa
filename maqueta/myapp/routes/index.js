var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.index);

router.get("/register.ejs" , indexController.register);

router.get("/index.ejs" , indexController.index);

router.get("/login.ejs" , indexController.login);

router.get("/product.ejs" , indexController.product);


module.exports = router;
