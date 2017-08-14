const express = require('express');
const app = express();
const fs = require('fs');
var http = require('http');
var path = require('path');

// write your code here
// serve the this.html page when /this is visited
// serve the that.html page when /that is visited
// DO NOT USE express.static

app.get('/', function (req, res) {
	res.setHeader('content-type', 'text/html', 'charset=utf-8');
	res.status(200).send('OK');
	res.end();
});

// app.get('../this', function (req, res, next) {
// 	res.set({ 'content-type': 'text/html', 'charset=utf-8' }); 
// 	res.status(200).send("OK");
// });

// app.get('../that', function (req, res, next) {
// 	res.set({ 'content-type': 'text/html', 'charset=utf-8' }); 
// 	res.status(200).send("OK");
// });

// app.get('../fancy', function (req, res, next) {
// 	res.set({ 'content-type': 'text/html', 'charset=utf-8' }); 
// 	res.status(200).send("OK");
// });


app.listen(3000);
