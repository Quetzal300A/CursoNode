// llamar librerias
const express = require('express');
const bodyParser = require('body-parser'); // trabajar con body
const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());

router(app);

app.use('/app' , express.static('public'));
app.listen(3000);

console.log('La aplicacion esta escuchando a http://localhost:3000');

app.use(router);

// const router = express.Router(); // permite separar por cabeceras y rutas

// const router = require('./components/message/netword');


// router.get('/getFuntion' , (req , ress) => {
    // console.log('Estas son las cabeceras');
    // console.log(req.headers);
    // ress.send('hola este es un get');
// });
// 
// router.get('/getResponse' , (req , ress) => {
    // console.log('Enviando respuesta desde response');
    // response.success( req, ress, 'Mensaje enviado desde Response' );
// });
// 
// router.post('/getFuntion' , (req , ress) => {
    // console.log(`imprime body`);
    // console.log(req.body);
    // console.log(req.query);
    // console.log(' esto es en el consola del servidor, no del frond.');
    // ress.send('hola este es un post');
// });
// 
// router.delete( '/delete' , (req , ress)=> {
    // ress.status(201).send( {
        // error: 'error 201',
        // body: {
            // delete:  'ejemplo del error'
        // }
    // } );
// } );


// router.post('/', (req, ress) => {
//     console.log(req.query);
//     if ( req.query.error === 'ok' ){
//         response.error(req, ress, 'error inesperado', 500 , 'es solo una simulacion de los errores');
//     }else{
//         response.success(req, ress, 'creado correctamente', 201);
//     }
// } );

