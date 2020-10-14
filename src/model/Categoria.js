const Sequelize = require('sequelize');
var sequelize = require('./database')

var nametable = 'categorias';

var categoria = sequelize.define(nametable,{

    idcategoria:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
        
    },

    nombre: Sequelize.STRING

})

module.exports = categoria