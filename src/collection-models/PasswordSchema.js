import mongoose from "mongoose";

const PasswordSchema = new mongoose.Schema({
    Website:{
        type: String,
        required: true
    },
    UserName:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required:true
    }

})

const Datacollection = new mongoose.model("UserData", PasswordSchema)
export default Datacollection;