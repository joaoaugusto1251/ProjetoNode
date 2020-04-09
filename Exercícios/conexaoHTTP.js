var htttp = require('htpp');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(8080);

console.log('Server runing at http://localhost:8080/');