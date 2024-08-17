const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:false
        },
        email: {
            type:String,
            required:false
        },
        phonenumber:{
            type: String,
            required:false
        },
        role:{
            type: String,
            required:false
        },
        age:{
            type: Number,
            required:false
        },
        sex: {
            type: String,
            required:false
        }
    },{collection:'test'}
    
)

const User = mongoose.model('test',UserSchema)


module.exports = User