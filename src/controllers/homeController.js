const mongoose = require('mongoose')


const getHomePage = (req, res) =>{
    res.send('home')
}
const getView = (req, res)=>{
    res.render('new.ejs')
}
const getCheck = (req, res)=>{
    res.send('cunny')
}

const getTestApi = async(req,res)=>{
    try{
        const test = mongoose.connection.db.collection('test')
        const testData = await test.find({}).toArray()

        const prettyData = JSON.stringify(testData, null, 2)
        res.setHeader('Content-Type', 'application/json')
        res.send(prettyData)
    }
    catch(err){
      res.status(500).json({message:err.message})
    }
  }
  


module.exports = {
    getHomePage,getView,getCheck,getTestApi
}