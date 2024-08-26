import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const testUserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique : true
        },
        password: {
            type: String,
            required: true
        },
        phonenumber: {
            type: String,
            required: false,
            unique: false
        },
        role: {
            type: String,
            required: false,
            default:'user'
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
    
    },
    {
        timestamps:true
    }
)

testUserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

export const testUser = mongoose.model('test', testUserSchema)
