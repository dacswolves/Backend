//se crea el controlador 
const controller = {}

var sequelize = require('../model/database');
var categoria = require('../model/Categoria');
const producto = require('../model/Producto');



controller.crear = async (req, res) => {    

    const response = await sequelize.sync().then(function () {
        const {nombrePro, precioPro,cantidadPro,idcategoria} = req.body;
        producto.create({
            nombrePro:nombrePro,
            precioPro:precioPro,
            cantidadPro:cantidadPro,
            idcategoria:idcategoria    
        });
  
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response });
  }

  controller.listarproductos = async (req, res) => {

    const response = await sequelize.sync().then(function(){
        //llamar todos los datos de la categoria
        const data = producto.findAll({include:[categoria]})
        return data;
    })
    .catch(error => {
        return error;
    });

    res.json({success: true, data: response});
}

controller.obtenerproducto = async (req, res) => {

    const response = await sequelize.sync().then(function(){
        //llamar todos los datos de la categoria
        const { id } = req.params;
        const data = producto.findAll({ where: { idproducto: id }})
        return data;
    })
    .catch(error => {
        return error;
    });

    res.json({success: true, data: response});
}

controller.actualizar = async (req, res) => {    

    const response = await sequelize.sync().then(function () {
        const { id } = req.params;
        const {nombrePro, precioPro,cantidadPro,idcategoria} = req.body;
        producto.update({
            nombrePro:nombrePro,
            precioPro:precioPro,
            cantidadPro:cantidadPro,
            idcategoria:idcategoria    
        },{where:{idproducto:id}}
        );
  
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response });
  }

   

    controller.eliminar = async (req, res) => {
        //parametros del póst
        const { id } = req.body;
        //delete del sequelize
    
        const del = await producto.destroy({
            where: { idproducto: id }
        });
    
        res.json({ success: true, deleted: del});
    }



  module.exports = controller;