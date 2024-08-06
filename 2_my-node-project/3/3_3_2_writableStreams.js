const fs = require('fs');
const writeStream = fs.createWriteStream('example.txt');
    
writeStream.write('overWrite', 'utf-8');
writeStream.write('yes it is', 'utf-8');
writeStream.end();

writeStream.on('finish', () => {
    console.log('File writing completed');
});
writeStream.on('error', (err) => {
    console.log('Error writing to file: ', err);
})