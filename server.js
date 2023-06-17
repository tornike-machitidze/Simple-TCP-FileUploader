const net = require('net');

const port = 4080;
const host = '127.0.0.1';

const server = net.createServer(() => {});

server.on('connection', (socket) => {

})


server.listen(port, host, () => {
    console.log('Start app on host:"port', server.address())
})