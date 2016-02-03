var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var router = express.Router();

// Models
var Record = require('./models/record.js');

// MongoDB
mongoose.connect('mongodb://127.0.0.1/donetoday');

// Express
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', router);
app.set('view engine', 'jade');

// Routes
// app.use('/api', require('./routes/api'));
/*
app.use('/', function(req, res){
	res.render('index', { title: 'DoneToday', message: 'Welcome to your personal life changer.'});
});
*/

var recordsRoute = router.route('/records');

// Create endpoint /api/records for POST
recordsRoute.post(function(req, res) {
  var record = new Record();

  console.log( req, 'body message' )

  record.message = req.body.message;
  record.creationDate = req.body.creationDate;

  record.save(function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: 'Record added', data: record });
  });
});

// Create endpoint /api/records for GET
recordsRoute.get(function(req, res) {
  Record.find(function(err, records) {
    if (err) {
      res.send(err);
    }

    res.json(records);
  });
});

var recordRoute = router.route('/record/:record_id');

// Create endpoint /api/record/:record_id for GET
recordRoute.get(function(req, res) {
  Record.findById(req.params.record_id, function(err, record) {
    if (err) {
      res.send(err);
    }

    res.json(record);
  });
});

// Tasks
// app.use('/tasks', require('./routes/tasks'));

// Clients
// app.use('/clients', require('./routes/clients')());

// Start server
app.listen(4001);
console.log('API is running on port 4001');
