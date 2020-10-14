//se crea el controlador 
const controller = {}

var sequelize = require('../model/database');
var Categoria = require('../model/Categoria');
const categoria = require('../model/Categoria');

controller.loadCategoria = async (req, res) => {

    const response = await sequelize.sync().then(function(){
        //llamar todos los datos de la categoria
        const data = categoria.findAll()
        return data;
    })
    .catch(error => {
        return error;
    });

    res.json({success: true, data: response});
}

controller.crear = async (req, res) => {    

  const response = await sequelize.sync().then(function () {
      const { nombre } = req.body;
      categoria.create({
        nombre:nombre             
      });

      return data;
  }).catch(error => { return error; });
  res.json({ success: true, data: response });
}

module.exports = controller;