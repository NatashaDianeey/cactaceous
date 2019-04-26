const Product = require('../models/product');

function getProducts(req, res) {
  // res.json(products);
  Product.find()
  .then(docs => {
    res.status(200).json({
      products: docs
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
}

module.exports = getProducts;
