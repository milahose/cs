const express = require('express');
const app = express();
const path = require('path');
const messageController = require('./messages/messageController');
const authController = require('./utils/authController');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './../client')));

// place routes here
app.get('/mesages', function (req, res) {
  res.send('GET testing...');
});

// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

app.post('/messages', function (req, res) {
  res.send('POST testing...')
});

app.listen(3000);

module.exports = app;
