// express makes it easy to handle different HTTP methods for the same route.
const express = require('express');
const app = express();

app.route('/resource')
    .get((req, res) => {
        res.send('GET request to /resource');
    })
    .post((req, res) => {
        res.send('POST request to /resource');
    })
    .put((req, res) => {
        res.send('PUT request to /resource');
    })
    .delete((req, res) => {
        res.send('DELETE request to /resource');
    });

// Using Middleware for Routing
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url},`);
    next();
})

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});