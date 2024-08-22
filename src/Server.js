const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const apiRouter = require('./routes/auth.route')
require('dotenv').config()
const mongoose = require('mongoose')
const logger = require('./middleware/mid')


//this must place about 
const app = express()
app.use(logger)
app.use(express.json())
app.use('/test',webRouter)
app.use('/api',apiRouter)

app.use(express.urlencoded({ extended: true }));
configViewEngine(app)

var port = process.env.PORT ||8081
var url = process.env.URL

console.log('Static directory:', path.join(__dirname, 'public'));


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
