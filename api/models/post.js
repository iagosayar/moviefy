'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = Schema({
		heading: String,
		content: String
});

module.exports = mongoose.model('Post', PostSchema);