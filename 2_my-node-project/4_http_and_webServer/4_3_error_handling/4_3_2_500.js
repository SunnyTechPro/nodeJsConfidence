const express = require('express');
const app = express();

app.get('/error', (req, res, next) => {
    const err = new Error('something wrong in server');
    err.status = 500;
    next(err)
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send('죄송합니다, 서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

