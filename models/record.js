// var restful = require('node-restful');
// var mongoose = restful.mongoose;

var mongoose = require('mongoose');


// Schema
var recordSchema = new mongoose.Schema({
	message: String,
	creationDate: {
		type: Date,
		default: Date.now
	}
});

// module.exports = restful.model('Records', recordSchema);
module.exports = mongoose.model('Records', recordSchema);
