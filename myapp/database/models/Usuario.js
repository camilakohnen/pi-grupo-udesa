module.exports= function(sequelize, dataTypes){
    let alias = "Usuarios";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        mail : {
            type: dataTypes.STRING
        },
        contrasenia : {
            type : dataTypes.STRING
        },
        fecha : {
            type: dataTypes.DATE
        },
        dni : {
            type: dataTypes.INTEGER
        },
        fotoUsuario : {
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
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    }

    let Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}