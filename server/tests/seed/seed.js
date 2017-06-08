// Import dependencies needed for testing.
const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

// Import models.
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

// Create user data for testing.
const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
	_id: userOneId,
	email: 'dan@example.com',
	password: 'userOnePass',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
	}]
}, {
	_id: userTwoId,
	email: 'bob@example.com',
	password: 'userTwoPass',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
	}]
}];

// Create todo data for testing.
const todos = [{
	_id: new ObjectID(),
	text: 'First test todo',
	completed: true,
	completedAt: 333,
	_creator: userOneId
}, {
	_id: new ObjectID(),
	text: 'Second test todo',
	_creator: userOneId
}, {
	_id: new ObjectID(),
	text: 'Third test todo',
	_creator: userTwoId
}];

// Populate the todo seed data for testing.
const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

// Populate the user seed data for testing.
const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();

		return Promise.all([userOne, userTwo])
	}).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};