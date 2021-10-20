const express = require('express');

const message = require('../components/message/netword');

const router = function () {
    server.use('/message' , message );
}

module.exports = router;