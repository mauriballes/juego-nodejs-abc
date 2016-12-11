module.exports = function identify(data, socket) {

    // Modulos
    var utils = require('../realtime/utils');

    var Usuario = require('../models/usuarios');
    var Unidad = require('../models/unidades');
    var Palabra = require('../models/palabras');

    // Cuando el user ingresa sus datos a la app
    if (typeof data.user_id === 'undefined') {

        // Crear user
        var user = new Usuario({username: data.username, sexo: data.sexo});
        user.save(function (err, docUser) {
            if (err) {
                socket.emit('identifyRes', {status: 'ERROR', evento: 'identifyRes', error: String(err)});
                return;
            }

            // Settear client en la lista de Clientes Conectados
            utils.setClientBySocketId(socket.id, docUser);

            // Get Unidades
            Unidad.find(function (err, docsUnidad) {
                if (err) {
                    socket.emit('identifyRes', {status: 'ERROR', evento: 'identifyRes', error: String(err)});
                    return;
                }

                // Get Palabras
                Palabra.find(function (err, docsPalabra) {
                    if (err) {
                        socket.emit('identifyRes', {status: 'ERROR', evento: 'identifyRes', error: String(err)});
                        return;
                    }

                    // Enviar resultado
                    socket.emit('identifyRes', {
                        status: 'OK',
                        evento: 'identifyRes',
                        cliente: docUser,
                        unidades: docsUnidad,
                        palabras: docsPalabra
                    });
                })
            });
        });
    } else {

        // Buscar User
        Usuario.findById(data.user_id, function (err, docUser) {
            if (err)
                socket.emit('identifyRes', {status: 'ERROR', evento: 'identifyRes', error: String(err)});
            else {
                utils.setClientBySocketId(socket.id, doc);
                socket.emit('identifyRes', {status: 'OK', evento: 'identifyRes', client: docUser});
            }
        });
    }
};