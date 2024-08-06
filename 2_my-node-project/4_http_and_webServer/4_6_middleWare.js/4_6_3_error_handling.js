const express = require('express');
const app = express();

app.get('/', (req, res) => {
    throw new Error('Simulated error');
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke !');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});