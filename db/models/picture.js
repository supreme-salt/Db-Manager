const Sequelize = require('sequelize');
const db = require('../config');

const Picture = db.define('picture', {
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

module.exports = Picture;
