const express = require('express');

const app = express();

const roles = {
    admin: ['read', 'write', 'delete'],
    user: ['read']
};

function checkPermission (role, permission) {
    return roles[role] && roles[role].includes(permission);
}

app.get('/secure-data', (req, res) => {
    const userRole = req.headers.role;

    if (checkPermission(userRole, 'read')) {
        res.send('Secure data accessed');
    } else {
        res.status(403).send('Forbidden');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});