const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const upload = multer({dest: 'uploads/'});
app.post('/upload', upload.single('file'), (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({file: req.file}));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});