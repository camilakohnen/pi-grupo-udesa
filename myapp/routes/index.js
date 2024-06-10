var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.index);

router.get("/register" , indexController.register);

router.get("/index" , indexController.index);

router.get("/login" , indexController.login);


module.exports = router;

