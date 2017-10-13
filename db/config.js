const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_URL);

// Test Connection
db
  .authenticate()
  .then(() => {
    console.log('DB connection established');
  })
  .catch(err => {
    console.error('Unable to connect to DB: ', err);
  });

module.exports = db;

// set associations
const Picture = require('./models/picture');
const Product = require('./models/product');

Product.hasMany(Picture);
