"use strict";

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const port = 3000;

const server = app.listen(port, () =>{
    console.log('Accepting connections on port ' + port + '...');
});
