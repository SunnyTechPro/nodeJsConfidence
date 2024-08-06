const express = require('express');
const app = express();

const authenticate = (req, res, next) => {
    const auth = req.headers.authorization;
    console.log("auth 값을 알아보자 ===")
    console.log(req.headers);
    console.log(auth);

    if (auth && auth === 'mysecrettoken') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

app.use(authenticate);
app.get('/', (req, res) => {
    res.send('Authenticated!');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});