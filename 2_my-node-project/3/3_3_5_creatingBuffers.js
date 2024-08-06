// creating
const buffer = Buffer.from('Hello, world', 'utf8');
console.log(buffer);
console.log(buffer.toString('utf8'));

// writing to buffer
const bufferWriting = Buffer.alloc(16);
bufferWriting.write('Hello, wrold!!', 'utf8');
console.log(bufferWriting);
console.log(bufferWriting.toString('utf8'));

// slicing and concatenating
const slice = buffer.slice(0, 5);
console.log(slice.toString('utf8'));

const buffer1 = Buffer.from('Hello,', 'utf8');
const buffer2 = Buffer.from('world', 'utf8');
const combined = Buffer.concat([buffer1, buffer2]);

console.log(combined.toString('utf8'))