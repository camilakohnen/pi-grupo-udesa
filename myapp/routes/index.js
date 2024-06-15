var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexController");
const { body } = require ("express-validator");
const db = require("../database/models")

/* GET home page. */
router.get('/', indexController.index);

router.get("/index" , indexController.index);

module.exports = router;

