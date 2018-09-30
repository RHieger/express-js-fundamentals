// Packages installed by Express Generator Template:

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// indexRouter and usersRouter are default Routes
// defined by Express:

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Declare app variable to expose Express methods:

var app = express();

// view engine setup: The next two lines are default specification
// for where Express will find the views for the app, '/views' by
// default, and the second line specifies the view engine of jade,
// used by default in Express unless another templating engine is
// specified. Very popular nowadays is the Handlebars templating
// engine, which specifies a three letter extension of .hbs.

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// MIDDLEWARE: Supplies methods that are invoked afer invocation
// of an HttpRequest, but before the Http response occurs.
//
// NOTE: The order in which the app.use() methods are called is
// significant and may change over versions of Express. They are
// called in the order that they appear below.

app.use(logger('dev'));               // Logs data to server console.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
