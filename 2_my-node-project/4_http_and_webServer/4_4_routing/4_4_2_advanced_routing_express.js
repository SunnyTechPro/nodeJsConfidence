const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page')
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

// using path parameters
app.get('/users/:id/books/:bookId', (req, res) => {
    const userId = req.params.id;
    const bookId = req.params.bookId;
    res.send(`User ID: ${$userId}, Book ID: ${$bookId}`);
});

// using query parameters
// 쿼리스트링에 있는 모든 key, value pair를 받을 수 있도록 변경
app.get('/search', (req, res) => {
    const query = req.query;
    res.send(`Search Query: ${JSON.stringify(query)}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
