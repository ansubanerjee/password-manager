import express from "express";
import Datacollection from "../collection-models/PasswordSchema.js"

const newpassword = express.Router();

newpassword.get("/", (req, res)=>{
    res.render("newpassword")
})

newpassword.post("/", async (req,res)=>{
    const data = {
        website: req.body.website.trim(),
        username: req.body.username.trim(),
        password: req.body.password.trim()
    };
    await Datacollection.insertMany([data])
    return res.render("home")
})

export default newpassword;


