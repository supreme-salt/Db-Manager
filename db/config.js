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

module.exports = sequelize;
