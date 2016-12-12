// Event Handler
module.exports = function (socket) {

    // Modulos
    var identifyGame = require('../game/identify');
    var requestPlayGame = require('../game/requestPlay');
    var cancelPlayRequestGame = require('../game/cancelPlayRequest');
    var endPlayGame = require('../game/endPlay');
    var utils = require('./utils');

    // Events
    socket.on('eventTest', eventTest);
    socket.on('identify', identify);
    socket.on('requestPlay', requestPlay);
    socket.on('cancelPlayRequest', cancelPlayRequest);
    socket.on('playGame', playGame);
    socket.on('touched', touched);
    socket.on('endGame', endGame);
    socket.on('disconnect', disconnect);

    // Handlers

    /**
     * Evento Prueba
     */
    function eventTest(data) {
        console.log('Evento Test Activated');
        socket.emit('eventTest', data);
    }

    /**
     * Identificarse despues de conectarse al socket
     */
    function identify(data) {
        identifyGame(data, socket);
    }

    /**
     * Pedir Jugar
     */
    function requestPlay(data) {
        requestPlayGame(data, socket);
    }

    /**
     * Cancelar peticion de partida
     */
    function cancelPlayRequest(data) {
        cancelPlayRequestGame(socket);
    }

    /**
     * Metodo con el que se pasan los objetos del juego
     */
    function playGame(data) {
        if (data.idPartida > -1) {
            // TODO: Validar en caso de que el oponente este conectado
            listPartidas[data.idPartida].player2.socket.emit('playGameRes', {
                status: 'OK',
                evento: 'playGameRes',
                letras: data.letras
            });
        } else {
            // TODO: Cuando un jugar mande letras para su oponente y que no exista su partida
        }
    }

    /**
     * Metodo en el que se mandan la letras seleccionadas al otro jugador
     */
    function touched(data) {
        if (data.idPartida > -1) {
            // TODO: Validar en caso de que el oponente este conectado
            if (data.player === 'Creador')
                listPartidas[data.idPartida].player2.socket.emit('touchedRes', {
                    status: 'OK',
                    evento: 'touchedRes',
                    letra: data.letra
                });
            else
                listPartidas[data.idPartida].player1.socket.emit('touchedRes', {
                    status: 'OK',
                    evento: 'touchedRes',
                    letra: data.letra
                });
        } else {
            // TODO: Cuando un jugar mande letras para su oponente y que no exista su partida
        }
    }

    /**
     * Metodo que da puntos y revisa por los ganadores del nivel
     */
    function endGame(data) {
        if (data.idPartida > -1) {
            // TODO: Validar en caso de que el oponente este conectado
            endPlayGame(data, socket);
        } else {
            // TODO: Cuando un jugar mande letras para su oponente y que no exista su partida
        }
    }

    /**
     * Desconectarse
     */
    function disconnect() {
        console.log('Client Disconnected: ' + socket.id);
        utils.deleteClientFromList(socket.id);
    }
};