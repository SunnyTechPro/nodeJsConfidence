const express = require('express');
const morgan = require('morgan');
const app = express();

// Define a Custom format
/*
 * 결과 = "GET / 304 - 2.815 ms"
 * 해석 = GET: method, /: URL, 304: status, -: res[content-length], 2.815: response-time
 */
morgan.format(
    'myFormat',
    ':method :url :status :res[content-length] :response-time ms'
);

app.use(morgan('myFormat'));
app.get('/', (req, res) => {
    res.send('Hello, Custom Logger!!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});