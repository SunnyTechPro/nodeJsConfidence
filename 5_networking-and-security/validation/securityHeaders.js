const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.get('/', (req, res) => {
    res.send('Hello, secure world!!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});