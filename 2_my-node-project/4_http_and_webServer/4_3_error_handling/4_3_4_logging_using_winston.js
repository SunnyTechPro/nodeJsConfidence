const express = require('express');
const winston = require('winston');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({timestamp, level, message}) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log'} )
    ]
});

app.get('/error', (req, res, next) => {
    const err = new Error(`Something went wrong`);
    err.status = 500;
    next(err);
});

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(err.status || 500).sendFile(path.join(__dirname, 'public', '500.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
