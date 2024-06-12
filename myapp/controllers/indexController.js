const db = require("../database/models");

let indexController = {
  index: function (req, res) {
        let criterio = {
            include: [
                {association: "usuario" },
                {association: "producto"},
            ] 
        }

        db.Comentario.findAll(criterio)
          .then((results) => {
            //return res.send(results);
            return res.render("index", {"lista": db});
          }).catch((err) => {
              return console.log(err);
          })
        },

  register: function (req, res) {
    res.render('register');
  },
  login: function (req, res) {
    res.render('login');
  },
  store: function(req, res) {
    let form = req.body;
    db.Usuario.create(form)
    .then((result) => {
        return res.redirect("/product")
    }).catch((err) => {
        return console.log(err);
    });
  },
  logOut: function(req, res) {
    req.session.destroy();
    return res.redirect("/")
  }
};

module.exports = indexController;