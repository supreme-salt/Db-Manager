const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');

const port = 3000 || process.env.PORT;
const app = express();

const productsRouter = require('./routes/productsRouter');
const picturesRouter = require('./routes/picturesRouter');

// DB
const sequelize = require('../db/config');

// Middleware
app
  .use(express.static('js'))
  .use(morgan('dev'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/api', productsRouter)
  .use('/api', picturesRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

// port connect
app.listen(port, err => {
  if (err) {
    console.error('Unable to connect to Port: ', err);
  } else {
    console.log('Connected to server at port: ', port);
  }
});
