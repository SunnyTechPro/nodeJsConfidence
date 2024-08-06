const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');
const helmet = require('helmet');

const app = express();

// redriction (from http to https)
/*
 * @description
 * implement redirection using middlewares(hsts, custom function)
 * 
 * @param {function} helmet.hsts
 * @param {function} redirectionHttptoHttps
 */
app.use(helmet.hsts({
    maxAge: 3153600,
    includeSubDomains: true
}))

const redirectionHttptoHttps = (req, res, next) => {
    if (req.secure) {
        return next();
    }
    console.log('HTTP connection is detected / HTTP 접속이 감지 되었습니다.');
    res.redirect(301, `https://${req.headers.host}:3000${req.url}`);
};

app.use(redirectionHttptoHttps);

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, secure World');
});

// Create an HTTP server
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
    console.log('HTTP server is running on port 80');
});

// Load SSL/TLS certicates
/*
 * @description
 * Originally, this function worte the entire path. 
 * I modified it to write only the file name, as this SSL is used only within the same directory
 */
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem'),
};

// Create an HTTPS server
const httpsServer = https.createServer(options, app);
httpsServer.listen(3000, () => {
    console.log('HTTPS server is running on port 3000');
});