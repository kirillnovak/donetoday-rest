var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var recordSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

module.exports = restful.model('Records', recordSchema);
