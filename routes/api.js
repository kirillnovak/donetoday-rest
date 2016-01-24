var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/record');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/records');

module.exports = router;
