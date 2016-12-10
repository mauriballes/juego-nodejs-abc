var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var unidad_schema = new Schema({
    nombre: {type: String, required: true},
    descripcion: String
}, {collection: 'unidades'});

var Unidad = mongoose.model("Unidad", unidad_schema);

module.exports.Unidad = Unidad;