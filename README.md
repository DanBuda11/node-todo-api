## Node.js Todo API

A working API for a todo list built with Node.js 8.0.0 which includes the use of async-await functions. Fully functional and available to be queried from [https://floating-cove-22072.herokuapp.com/](https://floating-cove-22072.herokuapp.com/). Features full suite of testing with seed data, user login/authentication, custom middleware and a MongoDB database.

### How to Use

Query the following API endpoints:

* Make a new todo item: POST /todos
* Get a user's todo items (when logged in): GET /todos
* Get a single todo item for a (logged in) user: GET /todos/:id
* Delete a single todo item: DELETE /todos/:id
* Update a single todo item: PATCH /todos/:id
* Create a new user: POST /users
* Get user info if logged in: GET /users/me
* Log a user in: POST /users/login
* Log a user out: DELETE /users/me/token

### Built With

* Node.js
* Express
* Mocha, Expect & Supertest libraries for testing
* Mongoose for modeling
* Validator, JSON Web Token, brypt for authentication/validation

### Future Plans

* Convert all appropriate functions to async-await
* Build out a front-end UI to make it a fully usable app