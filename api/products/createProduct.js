const mongoose = require('mongoose');
const Product = require('../models/product');

function createProduct(req, res) {
    
    //Nuevo producto 
    const newProduct = new Product({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        color: req.body.color,
        stock: {
            mx: req.body.stock.mx,
            us: req.body.stock.us,
        }
    });


    newProduct.save()
        .then(result => {
            res.status(201).json({
                message: "Se creo un nuevo producto correctamente",
                // nuevoProducto: newProduct
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
};

module.exports = createProduct;
