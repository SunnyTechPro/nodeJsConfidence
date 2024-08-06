const jwt = require('jsonwebtoken');
const users = require('../models/user');
const SECRET_KEY = 'your_secret_key';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization.split('')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = users.find(u => u.id === decoded.id);
    
        if (!user) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = authMiddleware;