const Sequelize = require('sequelize');
const db = require('../config');
const Product = require('./product');

const Picture = db.define('Picture', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  view: {
    type: Sequelize.ENUM,
    values: [
      'Front',
      'Back',
      'Collar Tag Front',
      'Collar Tag Back',
      'Waist Tag',
      'Front Bogo',
      'Behind Bogo',
      'Miscellaneous'
    ]
  }
});
// Picture.belongsTo(Product);

Picture.sync({ force: true })
  .then(() => console.log('Picture Table Created Successfully'))
  .catch(err => console.log('Error Creating Picture Table', err));

module.exports = Picture;
