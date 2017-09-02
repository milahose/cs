var fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser());
app.use(cookieParser());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
	console.log('password?', req.body.password);
  if (req.body.password === "123"){
    res.cookie('role', 'admin');
  } 
});

app.get('/secret', function(req, res) {
	console.log('cookies?', req.cookies.role);
  if(req.cookies.role === "admin") {
    res.send("secret page");
	} else {
	  res.send("denied");
	}
});

app.post('/file', function(req, res) {
	console.log('req body', req.body)
	response.send(req.body);
});


app.listen(9393);
console.log("Listening on 9393");
