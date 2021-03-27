require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const DB = process.env.MONGODB_URL;

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/api/todos');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/todos', todosRouter);

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('DB connection succesfull!');
});

module.exports = app;
