const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL);

// Test Connection
sequelize
  .authenticate()
  .then(() => {
    console.log('DB connection established');
  })
  .catch(err => {
    console.error('Unable to connect to DB: ', err);
  });

// Import Models
sequelize.import('./models/product.js');
sequelize.import('./models/listing.js');
sequelize.import('./models/offer.js');
sequelize.import('./models/user.js');
sequelize.import('./models/order.js');
sequelize.import('./models/payment.js');
sequelize.import('./models/color.js');

// Sync Tables
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Tables Created Successfully');
  })
  .catch(err => console.log('Error Creating Tables: ', err));

module.exports = sequelize;
