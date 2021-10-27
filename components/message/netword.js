const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/' , (req , ress) => {
   controller.getMessages()
   .then ( (messageList) => {
       console.log(messageList);
       response.success(req , ress , messageList , 200)
   })
   .catch( e => {
       response.error(req, ress, 'Error inesperado', 500, e)
   } );
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