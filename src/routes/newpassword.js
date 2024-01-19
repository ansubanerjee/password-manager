import express from "express";
import Datacollection from "../collection-models/PasswordSchema.js"

const newpassword = express.Router()

newpassword.get("/newpassword", (req, res)=>{
    res.render("newpassword")
})

newpassword.post("/newpassword", async (req,res)=>{
    const data = {
        website: req.body.website,
        username: req.body.username,
        password: req.body.password
    }
    await Datacollection.insterMany([data])
    res.render("home")
})

export default newpassword;