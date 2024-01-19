
import mongoose from "mongoose";

//Connection for MongoDB
const connectToDB = mongoose.connect("mongodb://localhost:27017/PasswordManagerDB")
.then(()=>{
    console.log("Mongo DB connected")

})
.catch(()=>{
    console.log("Failed Connection")
})

export default connectToDB;