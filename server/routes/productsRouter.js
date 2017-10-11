const router = require('express').Router();
const productsController = require('../controllers/productsController');

router
  .get('/products', productsController.getAllProducts)
  .post('/products', productsController.addProduct)
  .post('/products?*', productsController.updateProduct)
  .delete('/products?*', productsController.deleteProduct);

module.exports = router;
