/**
 * Module containing Express application
 */

const express = require('express');
const path = require('path');
const index = require('./routes/index');

// express web framework application
var app = express();

// designate view folder and set view engine
app.set('views', path.join(__dirname, '../client/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// static files root
app.use(express.static(path.join(__dirname, '../client/dist')));

// use our routing module 'index' to handle serving
// the appropriate html files for the given routes
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development'
    ? err
    : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;