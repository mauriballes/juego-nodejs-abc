// Modulos
var mongoose = require('mongoose');

// Modelos
var Usuario = require('./usuarios');
var Palabra = require('./palabras');
var Unidad = require('./unidades');
var UnidadesCursadas = require('./unidades_cursadas');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/abcgame', function () {
    Usuario.remove({}, function (err) {
        Palabra.remove({}, function (err) {
            Unidad.remove({}, function (err) {
                UnidadesCursadas.remove({}, function (err) {
                    console.log('BD Limpia');
                    seed();
                    console.log('BD Poblada');
                })
            });
        });
    });
});

function seed() {
    // Unidad
    (new Unidad({nombre: 'Saludos', descripcion: 'Unidas de Saludos', nivel: 1})).save(function (err, docUnit1) {
        (new Palabra({letras: 'Hola', unidad: docUnit1})).save(function (err, doc) {
            (new Palabra({letras: 'Buenas', unidad: docUnit1})).save(function (err, doc) {
                (new Palabra({letras: 'Alo', unidad: docUnit1})).save(function (err, doc) {
                    (new Unidad({
                        nombre: 'Despedidas',
                        descripcion: 'Unidas de Despedidas',
                        nivel: 2
                    })).save(function (err, docUnit2) {
                        (new Palabra({letras: 'Adios', unidad: docUnit2})).save(function (err, doc) {
                            (new Palabra({letras: 'Chau', unidad: docUnit2})).save(function (err, doc) {
                                mongoose.disconnect();
                            });
                        });
                    });
                });
            });
        });
    });
}