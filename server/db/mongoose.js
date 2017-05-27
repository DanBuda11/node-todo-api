// Import mongoose
var mongoose = require('mongoose');

// Tell mongoose how to use promises
mongoose.Promise = global.Promise;
// Connect mongoose to mongoDB
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };