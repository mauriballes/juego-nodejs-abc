module.exports.requestPlayGame = function requestPlayGame(data, socket) {
    // Modulos
    var Usuario = require('../models/usuarios');
    var Unidad = require('../models/unidades');

    var utils = require('../realtime/utils');

    var partidaModel = require('../realtime/models').partida;

    // Buscar Unidad
    var nivel = data.unidad;
    Unidad.findOne({nivel: nivel}, finded_unit);

    function finded_unit(err, doc) {
        if (doc) {
            var indexPartida = utils.getIndexPartidaForPlaying(nivel);
            var player = utils.getClientBySocketId(socket.id);
            if (indexPartida > -1) { // Hay una partida
                listPartidas[indexPartida].player2 = player;
                socket.emit('requestPlayRes', {status:'OK', evento:'requestPlayRes', player:player});
            } else { // No hay partida
                listPartidas.push(new partidaModel(player, null, doc));
                socket.emit('requestPlayRes', {status:'OK', evento:'requestPlayRes', message:'Buscando oponente'});
            }
        } else
            socket.emit('requestPlayRes', {status: 'ERROR', evento: 'requestPlayRes', error: 'Nivel no esta en la BD'});
    }
};