const express = require('express');
const helmet = require('helmet');

const app = express();

// Use Helmet
app.use(helmet({
    // Custom Helmet configuration
    contentSecurityPolicy: {
        directives: {
            defaultSrc:["self"],
            scriptSrc:["self", "trusted-scripts.com"],
            objectSrc:["none"],
            upgradeInsecureRequest:[],
        },
    },
    referrerPolicy: { policy: 'no-referrer'},
    featurePolicy: {
        features: {
            fullscreen: ["self"],
            vibrate: ["none"],
        }
    },
}));

// Parse JSON request bodies;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, secure world!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Secure Data' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});