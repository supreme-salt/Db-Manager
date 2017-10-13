const Picture = require('../../db/models/picture');
const Product = require('../../db/models/product');

const viewValues = Picture.rawAttributes.view.values;

module.exports = {
  getAllPictures: (req, res) => {
    Picture.findAll()
      .then(allPictures => res.status(200).send(allPictures))
      .catch(err => res.send(err));
  },
  getProductPictures: (req, res) => {
    Product.find({ where: { id: req.body.id } })
      .then(product =>
        product
          .getPictures()
          .then(productPictures => res.send(productPictures))
          .catch(err => res.send(err))
      )
      .catch(err => res.send(err));
  },
  addPicture: (req, res) => {
    Product.find({ where: { id: req.body.id } }).then(product => {
      Picture.create({ url: req.body.url, view: req.body.view }).then(picture => {
        product.addPictures(picture).then(response => {
          res.status(200).send(response);
        });
      });
    });
  },
  deletePicture: () => {}
};
