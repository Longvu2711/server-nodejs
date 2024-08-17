const express = require('express')
const {getHomePage,getView,getCheck,getName, getTestApi, getUserList, postNewUser} = require('../controllers/homeController')

const router = express.Router()


router.get('/', getHomePage)
router.get('/view',getView)
router.get('/check',getCheck)

router.get('/api/user',getUserList)
router.get('/api/user',getTestApi)
router.get('/api/user/getname',getName)

router.post('/api/user/newuser',postNewUser)

module.exports = router