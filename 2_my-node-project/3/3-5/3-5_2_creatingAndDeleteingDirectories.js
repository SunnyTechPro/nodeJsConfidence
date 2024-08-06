const fs = require('fs');

fs.mkdir('newDir', (err) => {
    if (err) {
        console.error('Error creating directory: ', err);
        return;
    }
    console.log('Dicrectory created successfully');

    fs.rmdir('newDir', (err) => {
        if (err) {
            console.error('Error deleting directory: ', err);
            return;
        }
        console.log('Directory deleted sucessfully');
    });
});
console.log('Creating and Deleting directory...');
