const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const authRoutes = require('./routes/auth');
const chatHandler = require('./routes/chat');
const authMiddleware = require('./middlewares/auth');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', authRoutes);
app.get('/protected', authMiddleware, (req, res) => {
    res.json({
        message: 'Access granted',
        user: req.user.username
    });
})

const server = http.createServer(app);

// WebSocket Chat Handler
chatHandler(server);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});