module.exports= function(sequelize, dataTypes){
    let alias = "Productos";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        idUsuarios: {
            type : dataTypes.INTEGER
        },
        
        fotoProducto : {
            type: dataTypes.STRING
        },
        nombreProducto : {
            type : dataTypes.STRING
        },
        descripcionProducto : {
            type : dataTypes.STRING
        },
        createdAt : {
            type : dataTypes.DATE
        },
        updatedAt : {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
    }

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true
    }

    let Producto = sequelize.define(alias, cols, config);

    return Producto;
}