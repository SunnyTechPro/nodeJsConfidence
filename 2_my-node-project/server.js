const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html',(err, data) => {
        if(err) {
            res.writeHead(500);
            res.end('Error loading file');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });

});

server.listen(port, hostname, () => {
    console.log('Server running at http://localhost:3000/');
});

