// Event Handler
module.exports = function (socket) {

    // Modulos
    var utils = require('../utils');
    var Usuario = require('../models/usuarios').Usuario;

    // Events
    socket.on('eventTest', eventTest);
    socket.on('identify', identify);
    socket.on('disconnect', disconnect);

    // Handlers
    function eventTest(data) {
        console.log('Evento Test Activated');
        socket.emit('eventTest', data);
    }

    function identify(data) {

        // Cuando el user ingresa sus datos a la app
        if (typeof data.user_id === 'undefined') {

            // Crear user
            var user = new Usuario({username: data.username, sexo: data.sexo});
            user.save(function (err, doc) {
                if (err)
                    socket.emit('identify_res', {status: 'ERROR', error: String(err)});
                else {
                    utils.setClientBySocketId(socket.id, doc);
                    socket.emit('identify_res', {status: 'OK', client: doc});
                }
            });
        } else {

            // Buscar User
            Usuario.findById(data.user_id, function (err, doc) {
                if (err)
                    socket.emit('identify_res', {status: 'ERROR', error: String(err)});
                else {
                    utils.setClientBySocketId(socket.id, doc);
                    socket.emit('identify_res', {status: 'OK', client: doc});
                }
            });
        }
    }

    function disconnect() {
        console.log('Client Disconnected');
    }
};