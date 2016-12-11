var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var unidades_cursadas_schema = new Schema({
    usuario: Schema.Types.Mixed,
    unidades: [{
        fecha: {type: Date, default: Date.now},
        unidad: Schema.Types.Mixed
    }]
}, {collection: 'unidades_cursadas'});

unidades_cursadas_schema.virtual('usuario_id').get(function () {
    return this.usuario._id;
});

var UnidadesCursadas = mongoose.model("UnidadesCursadas", unidades_cursadas_schema);

module.exports = UnidadesCursadas;