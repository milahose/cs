const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const movieController = require('./controllers/movieController');

/* FOR MONGO/MONGOOSE ONLY: Uncomment line below and replace the empty string with your local uri */
const uri = process.env.MONGO_URI || 'mongodb://localhost/temp';

// var pg = require('pg');
// var Sequelize = require('sequelize');
/* FOR POSTGRES/SEQUELIZE ONLY: Uncomment line below and replace the empty string with your local uri */
// const uri = process.env.POSTGRES_URI || '';

// IMPORTANT: WHEN CONNECTING TO YOUR DATABASE, USE THE `uri` VARIABLE FROM ABOVE
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log('Connected to database!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './')));

app.post('/movies', movieController.addMovie);
app.get('/movies', movieController.displayMovies);

app.listen(9494, () => {
  console.log('Listening on port 9494');
});