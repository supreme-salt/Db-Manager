const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');

const port = 3000 || process.env.PORT;
const app = express();

// DB
const sequelize = require('../db/config');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// port connect
app.listen(port, err => {
  if (err) {
    console.error('Unable to connect to Port: ', err);
  } else {
    console.log('Connected to server at port: ', port);
  }
});
