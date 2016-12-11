/**
 * Modelos
 */

function clienteConectado(socket, client, isPlaying){
    this.socket = socket || null;
    this.client = client || null;
    this.isPlaying = isPlaying || false;
}

function partida(player1, player2, unidad) {
    this.player1 = player1 || null;
    this.player2 = player2 || null;
    this.unidad = unidad || null;
}

module.exports.clienteConectado = clienteConectado;
module.exports.partida = partida;