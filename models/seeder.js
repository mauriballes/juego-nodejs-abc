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

function seedTest() {
    (new Unidad({nombre: 'Saludos', descripcion: 'Unidas de Saludos', nivel: 1})).save(function (err, docUnit1) {
        (new Palabra({letras: 'Hola', unidad: docUnit1})).save(function (err, doc) {
            (new Unidad({nombre: 'Comida', descripcion: 'Unidas de Comida', nivel: 2})).save(function (err, docUnit2) {
                (new Palabra({letras: 'Picante', unidad: docUnit2})).save(function (err, doc) {
                    (new Unidad({nombre: 'Bye', descripcion: 'Unidas de Saludos', nivel: 3})).save(function (err, docUnit3) {
                        (new Palabra({letras: 'Chau', unidad: docUnit3})).save(function (err, doc) {
                            (new Unidad({nombre: 'Carrera', descripcion: 'Unidas de Comida', nivel: 4})).save(function (err, docUnit4) {
                                (new Palabra({letras: 'Correr', unidad: docUnit4})).save(function (err, doc) {
                                    (new Unidad({nombre: 'Bailar', descripcion: 'Unidas de Comida', nivel: 5})).save(function (err, docUnit5) {
                                        (new Palabra({letras: 'Conga', unidad: docUnit5})).save(function (err, doc) {
                                            (new Unidad({nombre: 'Saludos', descripcion: 'Unidas de Saludos', nivel: 6})).save(function (err, docUnit6) {
                                                (new Palabra({letras: 'Hola', unidad: docUnit6})).save(function (err, doc) {
                                                    (new Unidad({nombre: 'Comida', descripcion: 'Unidas de Comida', nivel: 7})).save(function (err, docUnit7) {
                                                        (new Palabra({letras: 'Picante', unidad: docUnit7})).save(function (err, doc) {
                                                            (new Unidad({nombre: 'Bye', descripcion: 'Unidas de Saludos', nivel: 8})).save(function (err, docUnit8) {
                                                                (new Palabra({letras: 'Chau', unidad: docUnit8})).save(function (err, doc) {
                                                                    (new Unidad({nombre: 'Carrera', descripcion: 'Unidas de Comida', nivel: 9})).save(function (err, docUnit9) {
                                                                        (new Palabra({letras: 'Correr', unidad: docUnit9})).save(function (err, doc) {
                                                                            (new Unidad({nombre: 'Bailar', descripcion: 'Unidas de Comida', nivel: 10})).save(function (err, docUnit10) {
                                                                                (new Palabra({letras: 'Conga', unidad: docUnit10})).save(function (err, doc) {
                                                                                    mongoose.disconnect();
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function seedTest2() {
    // Unidad
    (new Unidad({nombre: 'Saludos', descripcion: 'Unidas de Saludos', nivel: 1})).save(function (err, docUnit1) {
        (new Palabra({letras: 'AAA', unidad: docUnit1})).save(function (err, doc) {
            (new Palabra({letras: 'DDD', unidad: docUnit1})).save(function (err, doc) {
                (new Palabra({letras: 'MMM', unidad: docUnit1})).save(function (err, doc) {
                    mongoose.disconnect();
                });
            });
        });
    });
}