// Event Handler
module.exports = function (socket) {

    // Events
    socket.on('event1', event1);
    socket.on('event2', event2);
    socket.on('disconnect', disconnect);

    // Handlers
    function event1(data) {
        console.log('Evento 1 Activated');
        socket.emit('event1', 'Evento1: ' + data);
    }

    function event2(data) {
        console.log('Evento 2 Activated');
        socket.emit('event2', 'Evento2: ' + data);
    }

    function disconnect() {
        console.log('Client Disconnected');
    }
};