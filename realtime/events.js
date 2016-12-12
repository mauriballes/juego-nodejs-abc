// Event Handler
module.exports = function (socket) {

    // Modulos
    var identifyGame = require('../game/identify');
    var requestPlayGame = require('../game/requestPlay');
    var cancelPlayRequestGame = require('../game/cancelPlayRequest');
    var utils = require('./utils');

    // Events
    socket.on('eventTest', eventTest);
    socket.on('identify', identify);
    socket.on('requestPlay', requestPlay);
    socket.on('cancelPlayRequest', cancelPlayRequest);
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
     * Desconectarse
     */
    function disconnect() {
        console.log('Client Disconnected: ' + socket.id);
        utils.deleteClientFromList(socket.id);
    }
};