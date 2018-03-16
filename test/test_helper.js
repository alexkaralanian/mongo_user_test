const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users_test')
// mongoose will create a db for you automatically if it doesnt find the one in the uri.

// before only gets executed once for entire test suite
before(done => {
	mongoose.connection
		// watch for mongoose to emit the open event once, and then run this function
		.once('open', () => {
			console.log('Mongo Good To Go-Go')
			done()
		})
		// watch for mongoose to emit the error event, and then run this function. 
		.on('error', error => console.warn('Error', error))
		// FYI : 'open' and 'error' are specific mongoose events. 
})

// Here we drop the user collection to be sure we dont have any duplicate values in the db
// All operations on the db are async
// Mocha need pause until this operation is complete. 
// For this we use Mocha's 'done' callback...
beforeEach(done => {
	mongoose.connection.collections.users.drop(()=> {
		// ready to execute next test
		done()
	});
})