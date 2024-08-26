import express from 'express';
import path from 'path';
import configViewEngine from './config/viewEngine.js';
import webRouter from './routes/web.js';
import apiRouter from './routes/auth.route.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from './middleware/mid.js';

dotenv.config();



//this must place about 
const app = express()
app.use(logger)
app.use(express.json())
app.use('/test',webRouter)
app.use('/api',apiRouter)

app.use(express.urlencoded({ extended: true }));
configViewEngine(app)

const port = process.env.PORT ||8081
const url = process.env.URL

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
