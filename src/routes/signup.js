import express from "express";
import Usercollection from "../collection-models/LoginSchema.js"
import bcrypt from "bcrypt";


const signup = express.Router();

signup.get("/", (req, res)=>{
    res.render("signup")
})

signup.post("/",async (req,res)=>{

    const data = {
        name: req.body.name.trim(),
        email:req.body.email.trim(),
        password: req.body.password.trim()
    };
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(data.password, salt);
    data.password = hashpassword;

        try{
            const check  = await Usercollection.findOne({name:data.name})
            if (check == req.body.name){
                res.send("Already Existing Username")
            }
        }catch{
            res.send("Unknown Error")
        }
    
    await Usercollection.insertMany([data])
    return res.render("signup")
    })
    export default signup;