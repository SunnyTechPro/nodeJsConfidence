const { Client } = require('pg');
const client = new Client();

// example user input
const userId = 1;
const query = 'SELECT * FROM users WHERE id = $1';
client.query(query, [userId], (err, res) => {
    if (err) {
        console.error('Query error: ', err.stack);
    } else {
        console.log('Query result: ', res.rows);
    }
});
