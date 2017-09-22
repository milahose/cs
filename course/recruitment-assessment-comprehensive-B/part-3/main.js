const express = require('express');
const app = express();
var fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  if (req.body.password === '123') {
    res.cookie('role', 'admin');
  } 
});

app.get('/secret', function(req, res) {
  console.log(req.cookies)
  if(req.cookies.role === 'admin') {
    res.send('secret page');
  } else {
	  res.send('denied');
  }
});

app.post('/file', (req, res) => {
  console.log('inside file')
	fs.writeFile('./data.json', JSON.stringify(req.body, null, 2), (err) => {
    if (err) {
      res.status(500).send('Try again');
    } else {
      res.status(200).send("Saved!");
    }
  });
});

app.listen(9393, () => {
  console.log('Listening on port 9393');
});
