import {testUser} from "../models/model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export const Login = async (req, res)=>{
    

    const { email, password } = req.body

    try {
        const user = await testUser.findOne({ email })
        if (!user) return res.status(400).json({ msg: 'User does not exist' })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

        const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: 3600 })
        res.json({ token, user: { id: user._id, email: user.email, role: user.role } })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({message: err.message})
    }
}


export const Signup = async (req, res)=>{
    const { email, password, role } = req.body;

    try {
        let user = await testUser.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' })
        }
        user = new testUser({
            email,
            password,
            role
        });
        await user.save()

        const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: 3600 })
        res.json({ token, user: { id: user._id, email: user.email, role: user.role } })

    } catch (err) {
        console.error(err.message);
        res.status(500).json({message: err.message})
    }
}



