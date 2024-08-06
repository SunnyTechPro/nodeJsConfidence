const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'DELETE') {
        const urlParts = req.url.split('/');
        const id = urlParts[urlParts.length - 1];

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Resource with ID ${id} deleted`);
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});