// test is we can create a new user and add them to our db
const assert = require('assert')
const User = require ('../src/user')

describe('Creating records', ()=> {
	it('saves a user', done => {
		const joe = new User({ name: 'Joe' })
		joe.save()
		.then(() => {
			assert(!joe.isNew)
			done()
		})
		.catch(err => {})
	})
})