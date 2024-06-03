const db = require("../database/models");



let indexController = {
  index: function (req, res, next) {

    db.Comentario.findAll()
      .then((results) => {
        return res.send(results)
        return res.render("index")
      }).catch((err) => {
          return console.log(err);
      })
  },
  register: function (req, res) {
    res.render('register');
  },
  login: function (req, res) {
    res.render('login');
  }
};

module.exports = indexController;