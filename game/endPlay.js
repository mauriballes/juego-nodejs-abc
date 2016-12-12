module.exports = function endPlay(data, socket) {
    // Modulos
    var utils = require('../realtime/utils');

    var indexPartida = utils.getIndexPartidaById(data.idPartida);

    if(indexPartida === -1){
        socket.emit('endPlayRes', {status: 'OK', evento: 'endPlayRes', message: 'Partida Terminada'});
        return;
    }
    var partida = listPartidas[indexPartida];
    var palabra = data.palabra.toUpperCase();
    if (partida.palabras.length === 0) {
        // Partida Ya Habia Acabado
        socket.emit('endPlayRes', {status: 'OK', evento: 'endPlayRes', message: 'Partida Terminada'});
    } else if (partida.palabras.indexOf(palabra) === -1) {
        // NO terminaste a tiempo la palabra en la Ronda
        socket.emit('endPlayRes', {status: 'OK', evento: 'endPlayRes', message: 'Palabra Perdida'});
    } else {
        // Terminaste primero la palabra
        listPartidas[indexPartida].palabras.splice(partida.palabras.indexOf(palabra), 1);
        var mypoints = 0, oponent = 0, socketOponent = null;
        if (socket.id === listPartidas[indexPartida].player1.socket.id) {
            listPartidas[indexPartida].puntos.player1 += 1;
            mypoints = listPartidas[indexPartida].puntos.player1;
            oponent = listPartidas[indexPartida].puntos.player2;
            socketOponent = listPartidas[indexPartida].player2.socket;
        } else {
            listPartidas[indexPartida].puntos.player2 += 1;
            mypoints = listPartidas[indexPartida].puntos.player2;
            oponent = listPartidas[indexPartida].puntos.player1;
            socketOponent = listPartidas[indexPartida].player1.socket;
        }

        // Notificar a ambos jugadores el nuevo puntaje
        socket.emit('endPlayRes', {
            status: 'OK',
            evento: 'endPlayRes',
            message: 'Puntuacion',
            myPoints: mypoints,
            oponent: oponent
        });
        if (socketOponent !== null)
            socketOponent.emit('endPlayRes', {
                status: 'OK',
                evento: 'endPlayRes',
                message: 'Puntuacion',
                myPoints: oponent,
                oponent: mypoints
            });

        // Revisar si acabo la partida
        if (listPartidas[indexPartida].palabras.length === 0) {
            socket.emit('finishGameRes', {status: 'OK', evento: 'finishGameRes', result: 'Ganador'});
            if (socketOponent !== null)
                socketOponent.emit('finishGameRes', {status: 'OK', evento: 'finishGameRes', result: 'Perdedor'});
            listPartidas.splice(indexPartida, 1); // Eliminar Partida
        }
    }
};