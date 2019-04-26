const mongoose = require('mongoose');
const express = require('express'); //traemos Express
const app = express(); //Para inicializar Express y poder crear nuestro servidor.
const api = require('./api');

const port = 8000;

mongoose.connect("mongodb://cactaceous:dbcactaceous@cactaceous-shard-00-00-oxmnw.mongodb.net:27017,cactaceous-shard-00-01-oxmnw.mongodb.net:27017,cactaceous-shard-00-02-oxmnw.mongodb.net:27017/test?ssl=true&replicaSet=cactaceous-shard-0&authSource=admin&retryWrites=true")
    .then(resp => {
        console.log('Connected..')
    })
    .catch(err => console.log('err'))

app.listen(port, ()=> {
    console.log(`Listening in the port: ${port}`);
    console.log(`http://localhost:${port}`);
});

app.use('/api', api);
