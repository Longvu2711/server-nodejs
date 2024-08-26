import express, { Router } from 'express';
import { getById, getByName, getCheck, getDeleteUser, getHomePage, getName, getUpdateUser, getUserList, getView, postNewUser  } from '../controllers/homeController.js';
import { Login,Signup } from '../controllers/authtest.js'

const router = express.Router()

router.get('/', getHomePage)
router.get('/view',getView)
router.get('/check',getCheck)

//get all
router.get('/user',getUserList)
// router.get('/user',getUserPage)  
router.get('/user/getname',getName)

//get id
router.get('/user/:id',getById)
router.get('/user/:name',getByName)

//post
router.post('/newuser',postNewUser)
//update
router.put('/user/:id',getUpdateUser)

//delete
router.delete('/user/:id',getDeleteUser)

router.post('/login',Login)
Router.post('/signup',Signup)


module.exports = router
