const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressHbs = require('express-handlebars')
const mongoose = require('mongoose')

const indexRouter = require('./routes/index');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeshopping',{useNewUrlParser:true})
mongoose.connection.on('open',()=>{
  console.log('MongoDB : Connected.')
})
mongoose.connection.on('err',(err)=>{
  console.log(err)
})

// view engine setup
app.engine('.hbs',expressHbs({defaultLayout: 'layout',extname: '.hbs'}))
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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