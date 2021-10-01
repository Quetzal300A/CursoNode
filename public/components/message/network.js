

router.post('/message', (req, ress) => {
    console.log(req.query);
    if ( req.query.error === 'ok' ){
        response.error(req, ress, 'error inesperado', 500 , 'es solo una simulacion de los errores');
    }else{
        response.success(req, ress, 'creado correctamente', 201);
    }
} );

router.get('/message', (req, ress) => {
    console.log(req.headers);
    ress.headers({
        "custom-header": "Nuestro valor perzonalizado"
    });
    restponse.success(req, ress, 'lista de mensajes')
} );