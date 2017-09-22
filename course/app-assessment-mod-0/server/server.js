const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const taskController = require('./controllers/taskController');
const authController = require('./controllers/authController');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/secret', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/secret.html'));
});

app.post('/signin', authController.verifyUser, (req, res) => {
  res.redirect('/secret');
});

app.post('/posttask', taskController.postTask);

app.get('/gettasks', taskController.getTasks);

app.delete('/deletetask', taskController.deleteTask);

app.listen(3333, () => {
  console.log('Listening on port 3333');
});