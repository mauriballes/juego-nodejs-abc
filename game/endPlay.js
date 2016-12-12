module.exports = function endPlay(data, socket) {
    // Modulos
    var utils = require('../realtime/utils');

    var partida = listPartidas[data.idPartida];
    var palabra = data.palabra.toLowerCase();
    if (partida.palabras.length === 0) {
        // Partida Ya Habia Acabado
        socket.emit('endPlayRes', {status: 'OK', evento: 'endPlayRes', message: 'Partida Terminada'});
    } else if (partida.palabras.indexOf(palabra) === -1) {
        // NO terminaste a tiempo la palabra en la Ronda
        socket.emit('endPlayRes', {status: 'OK', evento: 'endPlayRes', message: 'Palabra Perdida'});
    } else {
        // Terminaste primero la palabra
        listPartidas[data.idPartida].palabras.splice(partida.palabras.indexOf(palabra), 1);
        var mypoints = 0, oponent = 0, socketOponent = null;
        if (socket.id === listPartidas[data.idPartida].player1.socket.id) {
            listPartidas[data.idPartida].puntos.player1 += 1;
            mypoints = listPartidas[data.idPartida].puntos.player1;
            oponent = listPartidas[data.idPartida].puntos.player2;
            socketOponent = listPartidas[data.idPartida].player2.socket;
        } else {
            listPartidas[data.idPartida].puntos.player2 += 1;
            mypoints = listPartidas[data.idPartida].puntos.player2;
            oponent = listPartidas[data.idPartida].puntos.player1;
            socketOponent = listPartidas[data.idPartida].player1.socket;
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
        if (listPartidas[data.idPartida].palabras.length === 0) {
            socket.emit('finishGameRes', {status: 'OK', evento: 'finishGameRes', result: 'Ganador'});
            if (socketOponent !== null)
                socketOponent.emit('finishGameRes', {status: 'OK', evento: 'finishGameRes', result: 'Perdedor'});
        }
    }
};