const bcrypt = require('bcryptjs');
const password = 'mySecurePassword';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error('Hashing error', err);
    } else {
        console.log('Hashed password', hash);
    }
});