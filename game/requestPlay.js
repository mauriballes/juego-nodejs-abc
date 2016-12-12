module.exports = function requestPlayGame(data, socket) {
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
            var indexPartida = utils.getIndexPartidaForPlaying(nivel, socket.id);
            var player = utils.getClientBySocketId(socket.id);
            if (indexPartida > -1) { // Hay una partida
                listPartidas[indexPartida].player2 = player;
                socket.emit('requestPlayRes', {status:'OK', evento:'requestPlayRes', message:'Oponente Encontrado'});

                // Emitir init Partida
                // Creador
                var creador = listPartidas[indexPartida].player1;
                creador.socket.emit('initGameRes',{status:'OK', evento:'initGameRes', rol:'Creador', rival:'Player 1', idPartida:indexPartida});
                // Oponente
                socket.emit('initGameRes',{status:'OK', evento:'initGameRes', rol:'Oponente',rival:'Player 2', idPartida:indexPartida});
            } else { // No hay partida
                var partida = utils.haveGame(socket.id);
                if(partida === -1)
                    listPartidas.push(new partidaModel(player, null, doc));

                if(partida !== -1 && listPartidas[partida].player2 !== null)
                    socket.emit('requestPlayRes', {status :'OK', evento:'requestPlayRes', message:'Empezo Partida'});
                else
                    socket.emit('requestPlayRes', {status:'OK', evento:'requestPlayRes', message:'Buscando Oponente'});
            }
        } else
            socket.emit('requestPlayRes', {status: 'ERROR', evento: 'requestPlayRes', error: 'Nivel no esta en la BD'});
    }
};