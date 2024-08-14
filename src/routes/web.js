const express = require('express')


const router = express.Router()


router.get('/', (req, res) => {
    res.send('server on')
  })
router.get('/check',(req , res)=>{
    res.send('input text')
  })
router.get('/view',(req , res)=>{
    res.render('new.ejs')
  })

module.exports = router