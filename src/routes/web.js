const express = require('express')
const {getHomePage,getView,getCheck,getUser} = require('../controllers/homeController')

const router = express.Router()


router.get('/', getHomePage)
router.get('/view',getView)
router.get('/check',getCheck)
router.get('/user',getUser)
router.get('/users',getUser)

    
module.exports = router