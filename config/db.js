import mongoose from 'mongoose'

 export const connectDB = async()=> {
//error handling method(block)
 try {   
   console.log("connecting to database.....")

const connection = await mongoose.connect(process.env.DB_URL)   //for security of your data
console.log("successfully connected to database")
 }
 catch (error) {
  console.error (error)
 }
 finally {
  console.log("final statement")
 }
}

