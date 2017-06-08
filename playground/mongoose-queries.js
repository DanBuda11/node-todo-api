// Test file for finding a user in the database by userID.

const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Valid Todo ID
// var id = '5920a1e6468273b34f8aeee1';

// Invalid Todo ID
// var id = '5920a1e6468273b34f8aeee111';

// Valid User ID
var id = '591fa46b7328cf353efefb6c';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// } 

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
	if (!user) {
		return console.log('Unable to find user');
	}

	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});