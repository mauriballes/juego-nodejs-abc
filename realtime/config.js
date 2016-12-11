// socket.io Config
module.exports = function (Server) {

    // Modulos
    var io = require('socket.io')(Server);
    var events = require('./events');
    var modelSocket = require('./models');
    var clienteModel = modelSocket.clienteConectado;

    // Estructuras de datos
    global.listClientes = [];
    global.listPartidas = [];

    // Event Connection
    io.on('connection', function (socket) {

        // Agregar Nuevo Cliente y Enviar id
        listClientes.push(new clienteModel(socket));
        socket.emit('connectionRes', {status: 'OK', id: socket.id});

        // Event Handler
        console.log('Client Connected: ' + socket.id);
        events(socket);
    });
};