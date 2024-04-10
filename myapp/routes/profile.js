var express = require('express');
var router = express.Router();
var profileController = require("../controllers/profileController");

router.get("/" , profileController.profile);

router.get("/edit" , profileController.edit);

module.exports = router;