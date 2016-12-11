// Event Handler
module.exports = function (socket) {

    // Modulos
    var identifyGame = require('../game/identify');
    var requestPlayGame = require('../game/requestPlay');

    // Events
    socket.on('eventTest', eventTest);
    socket.on('identify', identify);
    socket.on('requestPlay', requestPlay);
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
     * Desconectarse
     */
    function disconnect() {
        console.log('Client Disconnected');
    }
};