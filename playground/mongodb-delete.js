// Test file for working with deleting from MongoDB database.

const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected to MongoDB server.');

	// deleteMany
	// db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({ text: 'Find shoes' }).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({ name: 'Dan' });

	db.collection('Users').findOneAndDelete({ _id: new ObjectID('591f8fd9271eb13065da9498')}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});

	// db.close();
});