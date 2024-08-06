const fs = require('fs');

const data = '\nAppended text';

fs.appendFile('fileToAppend.txt', data, (err) => {
    if (err) {
        console.error('Error appending to file: ', err);
        return;
    }
    console.log('Data appended successfully');
});

console.log('Appending data to file...');