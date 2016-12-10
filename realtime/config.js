// socket.io Config
module.exports = function (Server) {

    // Modulos
    var io = require('socket.io')(Server);
    var events = require('./events');

    // Event Connection
    io.on('connection', function (socket) {

        // Event Handler
        console.log('Client Connected');
        events(socket);
    });
};