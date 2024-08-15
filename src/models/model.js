const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String
})
const User = mongoose.model("test",userSchema)


module.exports = User
  
