const express = require('express')
const {getHomePage,getView,getCheck,getName, getTestApi, getUserList, postNewUser, getById, getByName, getUpdateUser, getDeleteUser} = require('../controllers/homeController')

const router = express.Router()

router.get('/', getHomePage)
router.get('/view',getView)
router.get('/check',getCheck)

//get all
router.get('/user',getUserList)
router.get('/api/user',getTestApi)
router.get('/user/getname',getName)

//get id
router.get('/user/:id',getById)
router.get('/user/:name',getByName)

//post
router.post('/user',postNewUser)

//update
router.put('/user/:id',getUpdateUser)

//delete
router.delete('/user/:id',getDeleteUser)

module.exports = router