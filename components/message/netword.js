const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/getResponse' , (req , ress) => {
    console.log('Enviando respuesta desde response');
    response.success( req, ress, 'Mensaje enviado desde Response' );
});

router.post('/' , (req , ress) => {
    
    controller.addMessage( req.body.user , req.body.message).then( (fullMessage) => {
        response.success(req, ress, { mensajeError: 'Enviado corectamente' , fullMessage }, 201);
    })
    .catch( ()=> {
        response.error(req , ress, 'Error inesperado', 500, 'Es una simulacion' );
    });

});

module.exports = router;  // pedir a jon explicacnion de esto