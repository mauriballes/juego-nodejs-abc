var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var unidades_cursadas_schema = new Schema({
    fecha: {type: Date, default: Date.now},
    usuario: Schema.Types.Mixed,
    unidades: [Schema.Types.Mixed]
}, {collection: 'unidades_cursadas'});

var UnidadesCursadas = mongoose.model("UnidadesCursadas", unidades_cursadas_schema);

module.exports.UnidadesCursadas = UnidadesCursadas;