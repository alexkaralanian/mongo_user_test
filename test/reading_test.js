const assert = require('assert')
const User = require('../src/user')

describe('Reading users out of db', () => {
	let joe;

	beforeEach( done => {
		joe = new User ({name: 'Joe'})
		joe.save()
			.then(() => done())
	})

	it('finds all users with a name of joe', () => {
		User.find({
			name: 'Joe'
		})
		.then(returnedUser => {
			console.log('USER', returnedUser)
			done()
		})
	})
})