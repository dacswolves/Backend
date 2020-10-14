const Sequelize = require('sequelize');
var sequelize = require('./database')

var categoria = require('./Categoria');

var nametable = 'productos';

var producto = sequelize.define(nametable,{

    idproducto:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
        
    },
    
    nombrePro: Sequelize.STRING,
    precioPro: Sequelize.INTEGER,
    cantidadPro: Sequelize.INTEGER,

       //Foranea
       idcategoria:{
        type:Sequelize.INTEGER,

        //Referencia
        references:{
            model:categoria,
            key: 'idcategoria'
        }

    }
})

producto.belongsTo(categoria);

module.exports = producto