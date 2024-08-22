const mongoose = require('mongoose')

const testUserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        },
        phonenumber: {
            type: String,
            required: false
        },
        role: {
            type: String,
            required: false
        },
        age: {
            type: Number,
            required: false
        },
        sex: {
            type: String,
            required: false
        },
        image : {
            type: String,
            required: false
        }           
    
    }
    , { collection: 'test' }

)

const testUser = mongoose.model('test', testUserSchema)


module.exports = testUser