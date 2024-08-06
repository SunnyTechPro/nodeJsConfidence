const express = require('express');
const app = express();

app.use((req, res) => {
    res.status(404).send('요청하신 페이지를 찾을 수 없습니다.\n입력하신 주소를 다시 확인해주세요.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

