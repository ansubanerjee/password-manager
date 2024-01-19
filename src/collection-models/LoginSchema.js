import mongoose from "mongoose";

const LogInSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})
const Usercollection = new mongoose.model("UserCredentials", LogInSchema)
export default Usercollection