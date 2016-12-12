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
        (new Palabra({letras: 'HOLA', unidad: docUnit1})).save(function (err, doc) {
            (new Palabra({letras: 'ALO', unidad: docUnit1})).save(function (err, doc) {
                (new Unidad({
                    nombre: 'Despedidas',
                    descripcion: 'Unidas de Despedidas',
                    nivel: 2
                })).save(function (err, docUnit2) {
                    (new Palabra({letras: 'ADIOS', unidad: docUnit2})).save(function (err, doc) {
                        (new Palabra({letras: 'CHAU', unidad: docUnit2})).save(function (err, doc) {
                            mongoose.disconnect();
                        });
                    });
                });
            });
        });
    });
}

function seedTest() {
    (new Unidad({nombre: 'Saludos', descripcion: 'Unidas de Saludos', nivel: 1})).save(function (err, docUnit1) {
        (new Palabra({letras: 'HOLA', unidad: docUnit1})).save(function (err, doc) {
            (new Unidad({nombre: 'Comida', descripcion: 'Unidas de Comida', nivel: 2})).save(function (err, docUnit2) {
                (new Palabra({letras: 'PICANTE', unidad: docUnit2})).save(function (err, doc) {
                    (new Unidad({
                        nombre: 'Bye',
                        descripcion: 'Unidas de Saludos',
                        nivel: 3
                    })).save(function (err, docUnit3) {
                        (new Palabra({letras: 'CHAU', unidad: docUnit3})).save(function (err, doc) {
                            (new Unidad({
                                nombre: 'Carrera',
                                descripcion: 'Unidas de Comida',
                                nivel: 4
                            })).save(function (err, docUnit4) {
                                (new Palabra({letras: 'CORRER', unidad: docUnit4})).save(function (err, doc) {
                                    (new Unidad({
                                        nombre: 'Bailar',
                                        descripcion: 'Unidas de Comida',
                                        nivel: 5
                                    })).save(function (err, docUnit5) {
                                        (new Palabra({
                                            letras: 'TAQUIRARI',
                                            unidad: docUnit5
                                        })).save(function (err, doc) {
                                            (new Unidad({
                                                nombre: 'Saludos',
                                                descripcion: 'Unidas de Saludos',
                                                nivel: 6
                                            })).save(function (err, docUnit6) {
                                                (new Palabra({
                                                    letras: 'HOLA',
                                                    unidad: docUnit6
                                                })).save(function (err, doc) {
                                                    (new Unidad({
                                                        nombre: 'Comida',
                                                        descripcion: 'Unidas de Comida',
                                                        nivel: 7
                                                    })).save(function (err, docUnit7) {
                                                        (new Palabra({
                                                            letras: 'PICANTE',
                                                            unidad: docUnit7
                                                        })).save(function (err, doc) {
                                                            (new Unidad({
                                                                nombre: 'Bye',
                                                                descripcion: 'Unidas de Saludos',
                                                                nivel: 8
                                                            })).save(function (err, docUnit8) {
                                                                (new Palabra({
                                                                    letras: 'CHAU',
                                                                    unidad: docUnit8
                                                                })).save(function (err, doc) {
                                                                    (new Unidad({
                                                                        nombre: 'Carrera',
                                                                        descripcion: 'Unidas de Comida',
                                                                        nivel: 9
                                                                    })).save(function (err, docUnit9) {
                                                                        (new Palabra({
                                                                            letras: 'CORRER',
                                                                            unidad: docUnit9
                                                                        })).save(function (err, doc) {
                                                                            (new Unidad({
                                                                                nombre: 'Bailar',
                                                                                descripcion: 'Unidas de Comida',
                                                                                nivel: 10
                                                                            })).save(function (err, docUnit10) {
                                                                                (new Palabra({
                                                                                    letras: 'TAQUIRARI',
                                                                                    unidad: docUnit10
                                                                                })).save(function (err, doc) {
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
        (new Palabra({letras: 'A', unidad: docUnit1})).save(function (err, doc) {
            (new Palabra({letras: 'D', unidad: docUnit1})).save(function (err, doc) {
                (new Palabra({letras: 'MM', unidad: docUnit1})).save(function (err, doc) {
                    mongoose.disconnect();
                });
            });
        });
    });
}