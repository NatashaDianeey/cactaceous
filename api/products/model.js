const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var product = new Schema({
    name : String,
    type : String,
    price : Number,
    color : Array,
    stock : {
        mx : Number,
        us : Number,
    }
})

product.methods.verificarStock = function() {
    if(this.stock.mx == 0) {
        console.log('No hay stock mx disponible');
    }
}

product.methods.verificarStockNorte = function() {
    if(this.stock.us == 0) {
        console.log('No hay stock us disponible');
    }
}

module.exports = product;