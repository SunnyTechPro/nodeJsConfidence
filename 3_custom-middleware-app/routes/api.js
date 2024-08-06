const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const rateLimiterMiddleware = require('../middlewares/rateLimiter');
const validateInputMiddleware = require('../middlewares/validateInput');

//Protected route with rate limiting
router.get('/protected',
    authMiddleware,
    rateLimiterMiddleware,
    (req, res) => {
        res.json({ message: 'This is a protected route' });
});

// POST/api/resource - Create a new resource with input validation
router.post('/resource',
    validateInputMiddleware,
    (req, res) => {
        const { title, description } = req.body;
        res.status(201).json({ message: 'Resource created', data: { title, description } });
});

module.exports = router;