const data = require("../db/data");

let profileController = {
    
    profile : function(req, res) {
        res.render('profile', {lista: data.productos});
    },
    edit : function(req, res) {
        res.render('profile-edit');
    },
}
module.exports = profileController;