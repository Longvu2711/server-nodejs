const express = require('express')
const app = express()
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
require('dotenv').config()
const mongoose = require('mongoose')


//this must place about those
app.use(express.json())
app.use('/',webRouter)

var port = process.env.PORT ||8081
var url = process.env.URL

console.log('Static directory:', path.join(__dirname, 'public'));
configViewEngine(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port} : http://localhost:${port}`)
})

mongoose.connect(url)
.then(()=> {
  console.log("connected to Mongodb")
})
.catch((error)=>{
  console.log("connect failed")
  console.log(error)
})

