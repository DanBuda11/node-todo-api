const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}) to remove multiple records
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('59238cce91065be31d6b5646').then((todo) => {
	console.log(todo);
});

Todo.findOneAndRemove({_id: '59238cce91065be31d6b5646'}).then((todo) => {
	
})