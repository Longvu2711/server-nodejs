import testUser from "../models/model.js"



export const Login =async (req, res)=>{

    const {email, password}= req.body
    try{
        const user = await testUser.findOne({email})
        if(!user)
            return res.status(400).json({message:'Email not found'})
        const isMatch = await brypt.compare(password, user.password)
        if(!isMatch) 
            return res.status(400).jsom({message:'Invalid'})

        const token = jwt.sign({id:user._id,role: user.role},process.env.KEY, { expiresIn: 36000 })
        res.json({token,user: {id: user._id,email: user.email,role: user.role}})

    }catch(err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
}


export const Signup = async (req, res)=>{
    const { email, password ,role} = req.body

    try{
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' })
        }
        user = new User({
            email,
            password,
            role
        });
        await user.save()

        const token = jwt.sign({id:user._id,role: user.role},process.env.KEY, { expiresIn: 36000 })
        res.json({token,user: {id: user._id,email: user.email,role: user.role}})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}