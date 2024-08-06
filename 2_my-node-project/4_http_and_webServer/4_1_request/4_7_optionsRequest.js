const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.setHeader('Allow', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        res.end();
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});