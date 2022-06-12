// Imports
const mongoose = require('mongoose');


// Todo Schema
const TodoSchema = new mongoose.Schema({
    name:String,
    description:String
}, {timestamps:true});


// Export
module.exports = mongoose.model('todos', TodoSchema);