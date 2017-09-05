const http = require('http');
const fs = require('fs');

var html;

fs.readFile(__dirname + '/index.html', function(err, data) {
  if (err) throw err;
  html = data;
});

http.createServer(function(request, response) {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(html);
    response.end();
  } else if (request.method === 'POST' && request.url === '/button') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("hello");
    response.end();
  } else if (request.method === 'GET' && request.url === '/style.css') {
    response.writeHead(200, {'Content-Type': 'text/css'});
    response.end();
  } else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end();
  }
}).listen(3000);
