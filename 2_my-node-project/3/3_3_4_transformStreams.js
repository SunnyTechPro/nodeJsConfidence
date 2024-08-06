const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example.txt.gz');
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);
writeStream.on('finish', () => {
    console.log('File compression completed');
});