/**
 * Modelos
 */

function clienteConectado(socket, client, isPlaying){
    this.socket = socket || null;
    this.client = client || null;
}

function partida(player1, player2, unidad, palabras) {
    this.player1 = player1 || null;
    this.player2 = player2 || null;
    this.unidad = unidad || null;
    this.palabras = palabras || [];
    this.puntos = {player1: 0, player2: 0};
}

module.exports.clienteConectado = clienteConectado;
module.exports.partida = partida;