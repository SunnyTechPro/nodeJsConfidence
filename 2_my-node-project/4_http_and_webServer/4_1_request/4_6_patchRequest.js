const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'PATCH') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(`Patched data: ${body}`);
        })
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});