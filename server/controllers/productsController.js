const Product = require('../../db/models/product');
const Picture = require('../../db/models/picture');

const categoryValues = Product.rawAttributes.category.values;
const seasonValues = Product.rawAttributes.season.values;
module.exports = {
  getAllProducts: (req, res) => {
    Product.findAll({ include: [Picture] })
      .then(allProducts => {
        const response = { products: allProducts, categories: categoryValues, seasons: seasonValues };
        res.send(response);
      })
      .catch(err => res.send(err));
  },
  addProduct: (req, res) => {
    console.log(req.body);
    Product.create(
      {
        name: req.body.name,
        category: req.body.category,
        year: req.body.year,
        season: req.body.season,
        brand: req.body.brand,
        description: req.body.description,
        pictures: req.body.images
      },
      {
        include: [Picture]
      }
    )
      .then(product => {
        res.send(product);
      })
      .catch(err => res.status(404).send(err));
  },
  updateProduct: (req, res) => {
    Product.update(req.body, { where: { id: req.body.id } })
      .then(result => res.send(result))
      .catch(err => res.send(err));
  },
  deleteProduct: (req, res) => {
    Product.find({ where: { id: req.body.id } })
      .then(item => {
        item.destroy().then(() => res.send('product deleted'));
      })
      .catch(() => res.send('could not find product'));
  }
};
