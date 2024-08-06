const fs = require('fs');
const readStream = fs.createReadStream('example.txt', 'utf-8');
    
readStream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk);
});
readStream.on('end', () => {
    console.log('File reading completed');
});
readStream.on('error', (err) => {
    console.error('Error reading File: ', err);
});