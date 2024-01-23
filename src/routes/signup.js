import express from "express";
import Usercollection from "../collection-models/LoginSchema.js"

const signup = express.Router()

signup.get("/", (req, res)=>{
    res.render("signup")
})

signup.post("/",async (req,res)=>{
    const data = {
        name: req.body.name,
        email:req.body.email,
        password: req.body.password
    }
        try{
            const check  = await Usercollection.findOne({name:req.body.name})
            if (check.name == req.body.name){
                res.send("Already Existing Username")
            }
        }catch{
            res.send("Unknown Error")
        }
    
    await Usercollection.insertMany([data])
    res.render("home")
    })
    export default signup;