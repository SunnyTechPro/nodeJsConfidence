const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}));
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Recevied name: ${name}, name: ${email}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});