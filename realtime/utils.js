// Utils Funtions

function setClientBySocketId(socketID, client) {
    for (var i = 0; i < listClientes.length; i++) {
        if (listClientes[i].socket.id === socketID) {
            listClientes[i].client = client;
            break;
        }
    }
}

module.exports.setClientBySocketId = setClientBySocketId;