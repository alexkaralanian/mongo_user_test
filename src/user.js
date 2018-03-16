const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = ({
	name: String // reference to the base string Object in JS (String global)
})

const User = mongoose.model('user', UserSchema)
// Mongo creats the 'user' collection in db
// We pass it the UserSchema to follow
// User represents the 'user' collection in mondo
// User is the User class (aka User model)

// We export User class for other parts of our app to import. 

module.exports = User