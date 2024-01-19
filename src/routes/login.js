import express from "express";
import Usercollection from "../collection-models/LoginSchema.js"

const login = express.Router()

login.get("/", (req, res)=>{
    res.render("login")
})


login.post("/login",async (req,res)=>{ 
    try{
        const check = await Usercollection.findOne({name:req.body.name})
        if (check.password == req.body.password){
            res.render("home")
        }

        else{
            res.send("Wrong Password")
        }
    }catch{
        res.send("Wrong Credentials")
    }
    res.render("home")
    }
    )
export default login;
