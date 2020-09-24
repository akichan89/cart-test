const mongoose = require('mongoose')

const User = new mongoose.Schema({
	firstName: {type:String, default:''},
	lastName: {type:String, default:''},
	email: {type:String, default:''},
	password: {type:String, default:''},
	isAdmin: {type:Boolean, default:false},
	timestamp: {type:Date, default:Date.now},
	nonce: {type:String, default:null},
	passwordResetTime: {type:Date, default:null}
})

module.exports = mongoose.model('User', User)