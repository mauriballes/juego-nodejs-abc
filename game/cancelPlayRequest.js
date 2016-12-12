module.exports = function cancelPlayRequest(socket) {
    // Modulos
    var utils = require('../realtime/utils');

    // Eliminar Partida
    var indexPartida = utils.haveGame(socket.id);
    if(indexPartida > -1)
        listPartidas.splice(indexPartida, 1);
};