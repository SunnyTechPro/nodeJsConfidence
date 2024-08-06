const express = require('express');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
/*
 * @description
 * this middleware, originally not included on this page.
 * however, the "/process" call requires this middleware to be used,
 * as the POST request needs the information to be parsed correctly
 */
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(csurf({ cookie: true }));

app.get('/form', (req, res) => {

    console.log(req.csrfToken());

    res.send(
        `
            <form action="/process" method="POST">
                <input type="hidden" name="_csrf" value="${req.csrfToken()}">
                <button type="submit">Submit</button>
            </form>
        `
    );
});
app.post('/process', (req, res) => {
    res.send('Form processed');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
