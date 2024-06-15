const { validationResult } = require("express-validator");
const db = require("../database/models");
const bcrypt = require("bcryptjs");

let indexController = {
  index: function (req, res) {
        let criterio = {
            include: [
                {association: "usuarios" },
                {association: "comentario" },
            ] 
        }

        db.Producto.findAll(criterio)
          .then((results) => {
           // return res.send(results);
            return res.render("index", {"lista": results});
          }).catch((err) => {
              return console.log(err);
          })
        },
};

module.exports = indexController;