const assert = require('assert')
const User = require('../src/user')

describe('Reading users out of db', () => {
	// let joey;
	// how are these tests still passing?
	// beforeEach gives each 'it' statement access to Joe

	beforeEach(done => {
		joe = new User ({name: 'Joe'})
		joe.save()
			.then(() => done())
	})

	it('finds all users with a name of joe', done => {
		User.find({
			name: 'Joe'
		})
		.then(returnedUser => {
			console.log('ID', joe.id)
			assert(returnedUser[0].id === joe.id)
			done()
		})
	})

	it('finds user with a specific ID', done => {
		User.findOne({
			_id: joe.id
		})
		.then(returnedUser => {
			assert(returnedUser.id === joe.id)
			done()
		})
	})
})