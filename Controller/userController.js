import User from "../Schema/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";



dotenv.config();//load .env

export const JWT_SECRET = process.env.JWT_SECRET;


//Create
export const createUser =  async (req, res) => {
try {
    const { password} = req.body
   

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
  console.log(err);
  return res.status(500).json ({
    message : "Error message"
  })
}
}


//Get
export const getAllUser= async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
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
      try{
        const { email, password } = req.body

        const existingUser = await User.findOne({ email })

        if(!existingUser) {
            return res.status(404).send("User not found")
        }

        const isMatch = await bcrypt.compare(password,existingUser.password)

        if(!isMatch) {
            return res.status(404).send("Email or Password is incorrect")
        }

        //JWT
        const token = jwt.sign(
        {
        id : existingUser.id,
        email : existingUser.email
        },
        JWT_SECRET, 
        {expiresIn : "1d"}
        )

        return res.json ({
            message :"Logged in successfully",
            token : token
        })
} catch (err) {
  console.log(err);
  res.status(500).send("Server error");
}
};
