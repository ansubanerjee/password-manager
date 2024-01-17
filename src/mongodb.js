const mongoose = require("mongoose")

//Connection for MongoDB
mongoose.connect("mongodb://localhost:27017/PasswordManagerDB")
.then(()=>{
    console.log("Mongo DB connected")

})
.catch(()=>{
    console.log("Failed Connection")
})


//Login_Signup Schema
const LogInSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})
const Usercollection = new mongoose.model("UserCredentials", LogInSchema)
module.exports = Usercollection


//Credential Schema

// const PasswordSchema = new mongoose.Schema({
//     Website:{
//         type: String,
//         required: true
//     },
//     UserName:{
//         type: String,
//         required: true
//     },
//     Password:{
//         type: String,
//         required:true
//     }

// })

// const Datacollection = new mongoose.model("UserData", PasswordSchema)
// module.exports = Datacollection