const express = require('express')
const {getHomePage,getView,getCheck,getName, getTestApi} = require('../controllers/homeController')

const router = express.Router()


router.get('/', getHomePage)
router.get('/view',getView)
router.get('/check',getCheck)
router.get('/api',getTestApi)
router.get('/api/name',getName)

module.exports = router