// llamar librerias

// otra forma
// import express form 'express';

const express = require('express');
const bodyParser = require('body-parser'); // trabajar con body
const router = express.Router(); // permite separar por cabeceras y rutas

const response = require('./network/response');

var app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/getFuntion' , (req , ress) => {
    console.log('Estas son las cabeceras');
    console.log(req.headers);
    ress.send('hola este es un get');
});

router.get('/getResponse' , (req , ress) => {
    console.log('Enviando respuesta desde response');
    response.success( req, ress, 'Mensaje enviado desde Response' );
});

router.post('/getFuntion' , (req , ress) => {
    console.log(`imprime body`);
    console.log(req.body);
    console.log(req.query);
    console.log(' esto es en el consola del servidor, no del frond.');
    ress.send('hola este es un post');
});

router.delete( '/delete' , (req , ress)=> {
    ress.status(201).send( {
        error: 'error 201',
        body: {
            delete:  'ejemplo del error'
        }
    } );
} );

// app.use('/' , ( req, ress ) => {
//     ress.send('hola');
// });

// escuchar

app.listen(3000);
console.log('La aplicacion esta escuchando a http://localhost:3000');