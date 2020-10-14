//Se utiliza para llamar las rutas designadas
const express = require('express');
const app = express();

//Settings - configurar el puerto
app.set('port', process.env.PORT || 4000);

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Middlewares
app.use(express.json());

const categoriaRouter = require('./router/CategoriaRouter')

//rutas madre categoria siempre va
app.use('/categoria',categoriaRouter);



const productoRouter = require('./router/ProductoRouter')
//rutas madre producto siempre va
app.use('/producto',productoRouter);










//mensaje de ruta
app.use('/',(req,res)=>{
    res.send("hola World form NodeJS express.");
  });



  //mensajede consola

app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})