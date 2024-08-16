const express = require('express')
const {getHomePage,getView,getCheck,getUser, getTestApi} = require('../controllers/homeController')

const router = express.Router()


router.get('/', getHomePage)
router.get('/view',getView)
router.get('/check',getCheck)
router.get('/api',getTestApi)

    
module.exports = router