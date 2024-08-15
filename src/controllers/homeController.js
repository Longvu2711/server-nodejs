const  User = require("../models/model")

const getHomePage = (req, res) =>{
    res.send('home')
}
const getView = (req, res)=>{
    res.render('new.ejs')
}
const getCheck = (req, res)=>{
    res.send('cunny')
}
const getUser = async (req, res)=>{
    const userData = await UserModel.find()
    res.json(userData)
}
module.exports = {
    getHomePage,getView,getCheck,getUser
}