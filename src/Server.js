const express = require('express')
const app = express()
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
require('dotenv').config()


const mongoose = require('mongoose')
const User = require('./models/model')
var port = process.env.PORT ||8081
var url = process.env.URL
console.log('Static directory:', path.join(__dirname, 'public'));
configViewEngine(app)

app.use('/',webRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port} : http://localhost:${port}`)
})

mongoose.connect(url)
.then(()=> {
  console.log("connected")
  
})
.catch(()=>{
  console.log("failed")
})
app.get('/testJson',async(req ,res)=>{
  const testdata = await User.find()
  res.json(testdata)
})
