const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const express = require('express');
const app = express();

const username = 'Oz33700';
const password = 'rjktr754_t_A€320';
const cluster = 'cluster0.fcqcydv';
const dbname = 'myFirstDatabase';

mongoose
  .connect(
    'mongodb+srv://Oz33700:rjktr754_t_A€320@cluster0.fcqcydv.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);

const port = process.env.PORT || 3050;
app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; script-src-elem: 'self', style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'"
  );

  next();
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
