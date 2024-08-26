
function logger (req,res,next){
    console.log(req.originalUrl)
    next()
}


export default logger