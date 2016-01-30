var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://127.0.0.1/donetoday');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'jade');

// Routes
app.use('/api', require('./routes/api'));
app.use('/', function(req, res){
	res.render('index', { title: 'DoneToday', message: 'Welcome to your personal life changer.'});
});

// Tasks
app.use('/tasks', require('./routes/tasks'));

// Clients
// app.use('/clients', require('./routes/clients')());

// Start server
app.listen(4001);
console.log('API is running on port 4001');
