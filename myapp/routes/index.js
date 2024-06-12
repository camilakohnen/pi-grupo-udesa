var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.index);

router.get("/register" , indexController.register);

router.post("/register" , indexController.store);

router.get("/index" , indexController.index);

router.get("/login" , indexController.login);

router.post("/login" , indexController.store);

router.post('/logout', indexController.logOut);

module.exports = router;

