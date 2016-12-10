var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var palabra_schema = new Schema({
    letras: {type: String, required: true},
    unidad: Schema.Types.Mixed
}, {collection: 'palabras'});

var Palabra = mongoose.model("Palabra", palabra_schema);

module.exports.Palabra = Palabra;