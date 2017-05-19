// const MongoClient = require('mongodb').MongoClient;

// Create a variable called MongoClient by using
// ES6 destructuring. Same as commented out Line 1
// const {MongoClient} = require('mongodb');

const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// ES6 destructuring
// var user = {name: 'Dan', age: 38};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Dan',
	// 	age: 38,
	// 	location: 'Austin'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user', err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// 	// console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.close();
});