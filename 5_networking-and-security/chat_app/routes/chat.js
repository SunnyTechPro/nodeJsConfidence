const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const users = require('../models/user');
const SECRET_KEY = 'your_secret_key';

const chatHandler = (server) => {
    const was = new WebSocket.Server({ server });
    was.on('connection', (ws, req) => {

        console.log(`웹 소켓 서버(req값은 header를 가지는가?): ${req.headers}`)

        const token = req.url.split('token=')[1];
        
        if (!token) {
            ws.close();
        }

        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            const user = users.find(u => u.id === decoded.id);

            if (!user) {
                ws.close();
            }
            ws.on('message', (message) => {
                const msg = JSON.parse(message);
                const boradcastMessage = {
                    user: user.username,
                    message: msg.message,
                    timestamp: new Date().toISOString
                };
                was.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(boradcastMessage));
                    }
                })
            })
        } catch (error) {
            ws.close();
        }
    })
}

module.exports = chatHandler;