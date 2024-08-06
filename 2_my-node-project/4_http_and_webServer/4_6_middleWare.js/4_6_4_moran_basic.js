const express = require('express');
const morgan = require('morgan');

const app = express();

// Use Morgan for logging requests
app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});