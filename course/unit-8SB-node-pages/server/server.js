const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(html);
	response.end()
}).listen(3000);


