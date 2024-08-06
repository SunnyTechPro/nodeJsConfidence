const express = require('express');
const authorize = require('../middlewares/authorize');
const router = express.Router();

// Admin-only-route
router.get('/admin', authorize('admin'), (req, res) => {
    res.json({ message: 'Welcome, admin!' });
});

// User and Admin route
router.get('/user', authorize(['user', 'admin']), (req, res) => {
    res.json({ message: `Welcome, ${req.user.role}!` });
});

module.exports = router;