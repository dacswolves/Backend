const express = require('express');
const router = express.Router();

const productoController = require('../controller/ProductoController');


router.post('/crearProducto', productoController.crear);
router.get('/listar-Producto', productoController.listarproductos);
router.get('/get-Producto/:id', productoController.obtenerproducto);
router.post('/actualizar/:id', productoController.actualizar);
router.post('/eliminar', productoController.eliminar);


module.exports = router;