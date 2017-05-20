// Import mongoose
var mongoose = require('mongoose');

// Tell mongoose how to use promises
mongoose.Promise = global.Promise;
// Connect mongoose to mongoDB
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };