const productos = require("../db/productos");

let profileController = {
    
    profile : function(req, res) {
        res.render('profile', {lista: productos.lista});
    },
    edit : function(req, res) {
        res.render('profile-edit');
    },
}
module.exports = profileController;