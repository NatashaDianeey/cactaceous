const mongoose = require('mongoose');

const productShema = mongoose.Schema({
    id: Number,
    name : String,
    type : String,
    price : Number,
    color : Array,
    stock : {
        mx : Number,
        us : Number,
    }
});

//Crear modelo apartir de schema
module.exports = mongoose.model('Product', productShema);