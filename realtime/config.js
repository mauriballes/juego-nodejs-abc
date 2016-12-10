module.exports = function (Server) {
    // Creando Servidor Socket sobre app
    var io = require('socket.io')(Server);

    // Inicializando Coneccion
    io.on('connection', function (socket) {
        console.log("Player Connected");
        socket.on('disconnect', function () {
            console.log("Player Disconnected");
        });
    });
};