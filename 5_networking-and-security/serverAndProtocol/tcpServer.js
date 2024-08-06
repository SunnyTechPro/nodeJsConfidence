const { Socket } = require('dgram');
const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log('Data received: '+ data);
    });
    socket.on('end', () => {
        console.log('Cleint disconnected');
    });
    socket.write('Welcome to the TCP server!\n');
});

server.listen(3000, () => {
    console.log('Server is listening on port3000');
});