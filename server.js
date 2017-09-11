const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port = 3000 || process.env.PORT;
const path = require('path');


const app = express();

//DB
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL);

//Test Connection
sequelize
  .authenticate()
  .then(() => {
    console.log('DB connection established');
  })
  .catch(err => {
    console.error('Unable to connect to DB: ', err);
  });

//Import Models
sequelize.import('./models/product.js')
sequelize.import('./models/listing.js')
sequelize.import('./models/offer.js')

//Sync Tables
sequelize
  .sync({force: true})
  .then(() => { console.log('Tables Created Successfully') })
  .catch((err) => console.log('Error Creating Tables: ', err) );


//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//port connect
app.listen(port, (err) => {
  if (err) {
    conosle.error('Unable to connect to Port: ', err);
  } else {
    console.log('Connected to server at port:' + port);
  }
});