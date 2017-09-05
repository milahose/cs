const http = require('http');
const fs = require('fs');

var server = http.createServer(function(reques, response) {
  fs.readFile(__dirname + '/index.html', function(err, data) {
    if (err) throw err;

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
}); 

server.listen(3000, function() {
  console.log("Listening on port 3000");
});
