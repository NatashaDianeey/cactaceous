const express = require('express');
const cors = require('cors');
const router = express.Router();

const products = require('./products');

// var password = process.env.CREDENTIAL;

router.use(express.json());
router.use(cors());
router.all('/', (req, res) => {
  res.json({
    eclairs : 'http://localhost:' + process.env.PORT + '/api/products'    //un objeto lo convertimos a json regresamos eclairss a la ruta
  })
});
const maceta = require('./products');

router.use('/products', maceta);  //cuando nos pregunte por eclairs, le entregaremos los eclairs

module.exports = router;