const mongoose = require('mongoose')

const Item = new mongoose.Schema({
	name: {type:String, default:''},
	description: {type:String, default:''},
	posts: {type:String, default:''},
	interested: {type:Array, default:[]}, // array of IDs of users interested in the item
	timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('Item', Item)