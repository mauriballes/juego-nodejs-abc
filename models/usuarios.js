var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var enum_sexo = ['M', 'F'];

var usuario_schema = new Schema({
    username: {type: String, required: true},
    sexo: {type: String, enum:{values: enum_sexo, message:"Opcion Invalida"}}
}, {collection: 'usuarios'});

var Usuario = mongoose.model("Usuario", usuario_schema);

module.exports = Usuario;