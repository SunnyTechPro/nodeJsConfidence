const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Reqeust Method: ${req.method}, Request URL: ${req.url}`);
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
