import express from "express";
import Usercollection from "../collection-models/LoginSchema.js"

const login = express.Router()

login.get("/", (req, res)=>{
    res.render("login")
})


login.post("/",async (req,res)=>{ 
    try{
        const name = req.body.name.trim();
        const check = await Usercollection.findOne({name:name});
        if (!check) {
            res.send("User does not exist.");
        }
        if (check.password == req.body.password){
            res.render("home");
        }
        else{
            res.send("Wrong Password");
        }
    }catch (e) {
        console.log(e);
        res.send("Wrong Credentials");
    }
    return res.render("home");
    }
    )
export default login;
