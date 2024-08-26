import User from '../models/user.model.js'


const signup = async (req, res)=>{
    console.log(req.body)
    try{
        const {email,password,username} = req.body

        if(!email || !username || !password ){
            return res.status(400).json({success:false,message:'all fields are required'})
        }

		if (password.length < 6) {
			return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
		}

		const existingUserByEmail = await User.findOne({ email: email });

		if (existingUserByEmail) {
			return res.status(400).json({ success: false, message: "Email already exists" });
		}

		const existingUserByUsername = await User.findOne({ username: username });

		if (existingUserByUsername) {
			return res.status(400).json({ success: false, message: "Username already exists" });
		}

        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    }
    catch(err){
        console.log({message: err.message})
    }
}

const login = (req,res) => {
    res.send('login')
}


module.exports ={
    login,signup
}

