const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    console.log(`Server received: ${msg} from ${rinfo.address}: ${rinfo.port}`);
});
server.on('listening', () => {
    const address = server.address();
    console.log(`Server listening on ${address.address}: ${address.port}`);

    sendFollowUpMessage();
});
server.bind(4000);


/*
 * @description: Originally, this function was not included on this page.
                 i added it to verify the "server.on('message', ...)" method
 */
function sendFollowUpMessage() {
    const client = dgram.createSocket('udp4');
    const message = Buffer.from('Hello, UDP server!');

    client.send(message, 0, message.length, 4000, 'localhost', (err) => {
        if (err) {
            console.error(err);
            client.close;
        } else {
            console.log('message sent - 메세지가 전송되었습니다.');
            client.close();
        }
    });
}

