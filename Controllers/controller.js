const jwt = require("jsonwebtoken")

const User = require("../Models/userModel")

const SignUp = async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            return res.status(403).send("User Already Exists")
        }
        const newUser = await User.create({name,email,password});
        newUser.save()
        return res.status(200).send("Successfully Created")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const SignIn = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email:email,password:password})
    try {
        if(!user){
            return res.status(404).send("User doesn't exists")
        }
        const accessToken = jwt.sign({id:user._id},"Mock15",{expiresIn:"20min"})
        const userId = {id:user._id}
        return res.status(200).send({message:"Successfully LogIn",accessToken,userId})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {SignUp,SignIn}