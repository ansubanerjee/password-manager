const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/PasswordManagerDB")
.then(()=>{
    console.log("Mongo DB connected")

})
.catch(()=>{
    console.log("Failed Connection")
})



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


const collection = new mongoose.model("Collection 1", LogInSchema)
module.exports = collection