import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { testUser } from '../models/model.js';

dotenv.config();

//test
export const getHomePage = (req, res) => {
    res.render('new.ejs')
}
export const getView = (req, res) => {
    res.render('new.ejs')
}
export const getCheck = (req, res) => {
    res.send('cunny')
}



//get all user 
export const getUserList = async (req, res) => {
    try {
        const test = mongoose.connection.db.collection(process.env.TEST_COLLECTION)
        const testData = await test.find({}).toArray()
        const prettyData = JSON.stringify(testData, null, 2)
        res.setHeader('Content-Type', 'application/json')
        res.send(prettyData)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}


//get user by list page
export const getUserPage = async (req, res) => {
    try {
        const page = parseInt(req.query.page)||1
        const limit = parseInt(req.query.limit)||10
        const skip = (page -1)* limit 

        const user = await testUser.find().skip(skip).limit(limit)
        const total = await testUser.countDocuments()

        res.status(200).json({
            total,
            page,
            page:Math.ceil(total/ limit),
            users : user
        })

        
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}



export const getTestApi = async (req, res) => {
    try {
        const test = mongoose.connection.db.collection(process.env.TEST_COLLECTION)
        const testData = await test.find({}).toArray()
        const prettyData = JSON.stringify(testData, null, 2)
        res.setHeader('Content-Type', 'application/json')
        res.send(prettyData)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
//for search data
export const getData = async (projection) => {
    const db = mongoose.connection.db;
    const collectionTest = db.collection('test');
    return await collectionTest.find({}, { projection }).toArray()
}

export const getName = async (req, res) => {
    const test = mongoose.connection.db.collection(process.env.TEST_COLLECTION)

    try {
        const data = await getData({ _id: 0, name: 1 });
        res.json(data);
    } catch (err) {
        if (!res.headersSent) {
            res.status(500).json({ message: err.message });
        }
    }
}


//get by id
export const getById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await testUser.findById(id)
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//get by name
export const getByName = async (req, res) => {
    try {
        const { name } = req.params
        const user = await testUser.findOne({ name: name })
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//post
export const postNewUser = async (req, res) => {
    console.log(req.body)
    try {
        const user = await testUser.create(req.body)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
//update 

export const getUpdateUser = async (req, res) => {
    try {
        const { id } = req.params

        const updatedUser = await testUser.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        if (!updatedUser) {
            res.status(404).json({ message: 'not found id' })
        }
        res.status(200).json(updatedUser)

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//delete 

export const getDeleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleteUser = await testUser.findByIdAndDelete(id)
        if (!deleteUser) {
            res.status(404).json({ message: 'user not found' })
        }
        res.status(200).json({ message: 'deleted user' })

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

