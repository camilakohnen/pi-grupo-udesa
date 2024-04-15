const data = require("../db/data");

let profileController = {
    
    profile : function(req, res) {
        res.render('profile', {lista: data.productos, usuario : data.usuario});
    },
    edit : function(req, res) {
        res.render('profile-edit', {usuario : data.usuario});
    },
}
module.exports = profileController;