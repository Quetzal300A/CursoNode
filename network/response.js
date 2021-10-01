exports.success = ( req , ress , message, status ) => {
    ress.status(status || 200).send(message);
    // ress.send(message);
}

exports.error = ( req , ress, message , status, details ) => {
    console.error( details);
    ress.status(status || 500 ).send(
        {
            error: message,
            body: ''
        }
    );
}