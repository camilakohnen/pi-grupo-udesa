const { Association } = require("sequelize");
const db = require("../database/models");

let productController = {
    edit : function(req, res) {
        res.render('product-add', {usuario : db.usuario});
    },
    profile : function(req, res) {
        res.render('profile', {lista: db.productos});
    },
    product : function(req, res) {

        let id = req.params.id;
        let criterio = {
            include: [
                {association: "usuarios" },
                {association: "comentario", include:[
                    {association: "usuario" },
                ] },
            ] 
        }

        db.Producto.findByPk(id, criterio)
        .then((results)=> {
         //   return res.send(results);
            return res.render("product", {lista: db})
        }).catch((err) => {
             return console.log(err);
         });

    },
    results : function(req, res) {
        let id = req.params.id;
        let criterio = {
            include: [
                {association: "usuarios" },
                {association: "comentario", include:[
                    {association: "usuario" },
                ] },
            ] 
        }
        db.Producto.findByPk(id, criterio)
        .then((results)=> {
            return res.send(results);
        }).catch((err) => {
             return console.log(err);
         });
         
        // res.render('search-results', {lista : db.productos});
    },
    add : function(req, res) {
        res.render('product-add', {usuario : db.usuario});
    },
};

module.exports = productController;