const { Association } = require("sequelize");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const op = db.Sequelize.Op;

let productController = {
    edit : function(req, res, next) {
      let id = req.params.id
      let filtrado = {include : [{association : "usuarios"}]}
      db.Producto.findByPk(id, filtrado)
      .then(function(result){
        return res.render('product-edit', {"lista" : result});
      })
    },

    editPost : function (req, res) {
        let iD = req.params.id;
        let errores = validationResult(req);
        let form = req.body ;
        if (errores.isEmpty()) {
          let producto = {
            fotoProducto: form.fotoProducto,
            nombreProducto: form.nombreProducto,
            descripcionProducto : form.descripcionProducto,
            idUsuarios : req.session.user.id,
          }
          db.Producto.update(producto,  {where : {id : iD}})
          .then((results) => {
          // return res.send(results)
           return res.redirect("/index")
          }).catch((err) => {
            return console.log(err);
          });
        }else{         
          //return res.send(errores)
          return res.render("product-edit", {errores: errores.mapped(), lista:req.body });
        }
    },

    delete: function(req, res, next) {
      let eliminar = req.params.id;
      db.Producto.destroy({where : {id : eliminar}})
      .then(function(){
        return res.redirect("/")
      })
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
         // return res.send(results)
            return res.render("product", {"lista": results})
        }).catch((err) => {
             return console.log(err);
         });

    },

    searchResults : function(req, res) {
        let qs= req.query.search;
        let filtrado = {
            where:{
            [op.or]:
                [
                    {nombreProducto: {[op.like]: `%${qs}%` }},
                    {descripcionProducto: {[op.like]: `%${qs}%`}}
            ]},
            order: [
                ['createdAt', 'DESC']
            ],
            include: [
                {association: "usuarios" },
                {association: "comentario", include:[
                    {association: "usuario" },
                ] },
            ] 
            
        };
        db.Producto.findAll(filtrado)
        .then(function(result) {
            if (result.length == 0) {
                return res.send('No hay resultados para su criterio de búsqueda');
            } else {
                return res.render('search-results', {"result": result}); }
        }).catch(function(error) {
            return console.log(error);
        })
        
    },

    add : function(req, res) {
        res.render('product-add', {usuario : db.usuario});
    },

    addPost: function (req, res) {
        let id = req.params.id;
        let errores = validationResult(req);
        if (errores.isEmpty()) {
          let form = req.body ;
          let producto = {
            fotoProducto: form.fotoProducto,
            nombreProducto: form.nombreProducto,
            descripcionProducto : form.descripcionProducto,
            idUsuarios : id
          }
          db.Producto.create(producto)
          .then((result) => {
            return res.redirect("/index");
          }).catch((err) => {
            return console.log(err);
          });
        }else{
            return res.render("product-add", {errores: errores.mapped(), old:req.body });
        }
      },

    comment: function(req,res){ 
      let errors = validationResult(req)  
      if (req.session.user != undefined) {
        if (errors.isEmpty()){
          let id = req.params.id
          let form = req.body
          form.idUsuario = req.session.user.id
          form.idProducto = req.params.id

          db.Comentario.create(form).then((result) => {
            return res.redirect(`/product/id/${id}`)  
          }).catch((err) => {
              console.log(err)
          });

        } else {
          let id = req.params.id 
          let filtrado = {
            include : [
              {association: "usuarios" },
              {association: "comentario", include:[
                  {association: "usuario" },
              ] },
          ],
            where : [
            {id : id}
          ]
          }
      
          db.Producto.findAll(filtrado).then(function (result) {
            return res.render('product', { "lista": result,
              errors: errors.mapped(),
              old: req.body
              });
          }).catch(error=>console.log(error)) 
          }
    }},

};

module.exports = productController;