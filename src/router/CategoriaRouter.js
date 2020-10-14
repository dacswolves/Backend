const express = require('express');
const router = express.Router();

const CategoriaController = require('../controller/CategoriaController');

router.get('/datatest', CategoriaController.loadCategoria);

router.post('/crearCategoria', CategoriaController.crear);



module.exports = router;