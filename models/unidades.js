var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var unidad_schema = new Schema({
    nombre: {type: String, required: true},
    descripcion: String,
    nivel: {type: Number, min: [1, 'El nivel no puede ser menor de 1']}
}, {collection: 'unidades'});

var Unidad = mongoose.model("Unidad", unidad_schema);

module.exports = Unidad;