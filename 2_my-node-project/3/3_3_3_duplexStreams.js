const net = require('net');
const server = net.createServer((socket) => {
    socket.write('Welcome to the server!\n');
    socket.on('data', (data) => {
        console.log('Received: ', data.toString);
        socket.write('You said: ' + data);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (err) => {
        console.error('Error: ', err);
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
})