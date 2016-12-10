// Modulos
var express = require('express');
var mongoose = require('mongoose');

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/abcgame');

// Server express
var app = express();

// Test Server
app.get('/', function (req, res) {
    res.send('Hello World, La app ya esta deployada');
});

module.exports = app;
