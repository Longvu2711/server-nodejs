const express = require('express')
const {getHomePage,getView,getCheck,getName, getTestApi, getUserList, postNewUser, getById, getByName, getUpdateUser} = require('../controllers/homeController')

const router = express.Router()

router.get('/', getHomePage)
router.get('/view',getView)
router.get('/check',getCheck)

//get all
router.get('/api/user',getUserList)
router.get('/api/user',getTestApi)
router.get('/api/user/getname',getName)

//get id
router.get('/api/user/:id',getById)
router.get('/api/user/name/:name',getByName)

//post
router.post('/api/user/newuser',postNewUser)

//update
router.put('/api/user/:id',getUpdateUser)

module.exports = router