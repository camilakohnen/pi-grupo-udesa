const { Association } = require("sequelize");
const db = require("../database/models");

let profileController = {
    
    profile : function(req, res) {
        let id = req.params.id;
        let criterio = {
            include: [
                {association: "producto" },
                {association: "comentario", include:[
                    {association: "producto" },
                ] },
            ] 
        }

        db.Usuario.findByPk(id, criterio)
        .then((results)=> {
            return res.send(results);
        }).catch((err) => {
             return console.log(err);
         });
        // res.render('profile', {lista: db.productos, usuario : db.usuario});
    },
    edit : function(req, res) {
        res.render('profile-edit', {usuario : db.usuario});
    },
}
module.exports = profileController;