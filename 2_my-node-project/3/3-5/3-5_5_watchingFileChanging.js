// Monitor a file for changes and log when it is modified

const fs = require('fs');

fs.watch('watchedFile.txt', (eventType, filename) => {
    if (filename) {
        console.log(`${filename} file changed`);
    }
});
console.log('Watching file for changes...');