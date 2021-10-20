const express = require('express');

const response = require('../../network/response');

const router = express.Router();


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

module.exports = router;  // pedir a jon explicacnion de esto