const mongoose = require('mongoose');
const express = require('express'); //traemos Express
const app = express(); //Para inicializar Express y poder crear nuestro servidor.
const api = require('./api');

const port = 8000;

mongoose.connect(process.env.MONGO_ATLAS)
    .then(resp => {
        console.log('Connected..')
    })
    .catch(err => console.log('err'))

app.listen(port, ()=> {
    console.log(`Listening in the port: ${port}`);
    console.log(`http://localhost:${port}`);
});

app.use('/api', api);
