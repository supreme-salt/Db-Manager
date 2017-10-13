const Sequelize = require('sequelize');
const db = require('../config');
const Picture = require('./picture');

const Product = db.define('Product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
    // unique: true
  },
  category: {
    type: Sequelize.ENUM,
    values: [
      'Jackets',
      'Shirts',
      'Tops/Sweaters',
      'Sweatshirts',
      'Pants',
      'Hats',
      'Bags',
      'Accessories',
      'Shoes',
      'Skate'
    ],
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  season: {
    type: Sequelize.ENUM,
    values: ['SS', 'FW'],
    allowNull: false
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Product.hasMany(Picture, { foreignKey: 'Product_pictureID' });

Product.sync({ force: true })
  .then(() => {
    console.log('Products Tables Created Successfully');
  })
  .catch(err => console.log('Error Creating Products Tables: ', err));

module.exports = Product;
