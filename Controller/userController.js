import User from "../Schema/User.js";
import bcrypt from "bcrypt"


//Create
export const createUser =  async (req, res) => {
try {
    const { password } = req.body

    //  const existingUser = await User.create({email:email})
    //     res.json(existingUser)
    
    //  if(!existingUser) {
    //         return res.status(404).send("The user already exists")
    //     }
    

    const hashedpassword = await bcrypt.hash(password,10)

    const newUser = await User.create({
        fullName : req.body.fullName,
        email : req.body.email,
        password : hashedpassword
    }
    );

  res.json(newUser);
}
catch(err) {
  return res.status(500).json ({
    message : err.message
  })
}
}


//Get
export const getAllUser= async (req, res) => {
  try {
    const User = await User.find()
    res.status(200).json(User)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


//Update
export const UpdateUser = async (req, res) => {
  const {id} = req.params
  const newValue = req.body
  const newUser = await User.findByIdAndUpdate(id,newValue,{new:true})
  res.json(newUser);
}


//Login
export const login = async (req, res) => {

        const { email, password } = req.body

        const existingUser = await User.findOne({email})

        if(!existingUser) {
            return res.status(404).send("User not found")
        }

        const isMatch = await bcrypt.compare(password,existingUser.password)

        if(!isMatch) {
            return res.status(404).send("Email or Password is incorrect")
        }

        return res.json ({
            message :"Logged in successfully"
        })
}