const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file: ', err);
        return;
    }
    fs.writeFile('output.txt', data, (err) => {
        if (err) {
            console.error('Error writing file: ', err);
            return;
        }
        console.log('File has been written successfully');
    });
});
console.log('Reading and Writing files...');