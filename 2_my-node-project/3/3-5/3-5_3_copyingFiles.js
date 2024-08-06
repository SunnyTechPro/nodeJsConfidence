const fs = require('fs');
const source = 'source.txt';
const destination = 'destination.txt';

fs.copyFile(source, destination, (err) => {
    if (err) {
        console.error('Error copying file: ', err);
        return;
    }
    console.log('File copied successfully');
});
console.log('Copying file');