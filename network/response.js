exports.success = ( req , ress , message, status ) => {
    ress.status(status || 200).send({message });
    // ress.send(message);
}

exports.error = ( req , ress, message , status, details ) => {
console.error( "[response erros ]"  + details);
console.table( [{
            id: 1,
            name: 'alfonso',
        },{
            id: 2,
            name: 'altamirano',
        }
    ] );
    ress.status(status || 500 ).send(
        {
            error: message,
            body: ''
        }
    );
}