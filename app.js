var express = require('express');
var mongoose = require('mongoose');

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/abcgame');

// Server
var app = express();

module.exports = app;
