var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const createError = require('http-errors');

// Initialize DB
require('./utils/initDB')();

var omicsRoutes = require('./routes/omics');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', omicsRoutes);

//404 handler and pass to error handler
app.use((req, res, next) => {
  next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status);
  res.send({
    error: {
      status: err.status,
      message: err.message,
      properties: err.properties ?? undefined,
    },
  });
});

module.exports = app;
