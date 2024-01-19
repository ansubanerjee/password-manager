import connectToDB from "./initiallizer/db.js";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Usercollection from "./collection-models/LoginSchema.js"
import Datacollection from "./collection-models/PasswordSchema.js"
const app = express()


//Objects Definition

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const templatePath = path.join(__dirname, '../templates')    

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res)=>{
    res.render("login")
})
app.get("/signup", (req, res)=>{
    res.render("signup")
})
app.get("/newpassword", (req, res)=>{
    res.render("newpassword")
})



app.post("/signup",async (req,res)=>{
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


app.post("/login",async (req,res)=>{ 
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
    })
    
    app.post("/newpassword", async (req,res)=>{
        const data = {
            website: req.body.website,
            username: req.body.username,
            password: req.body.password
        }
        await Datacollection.insterMany([data])
        res.render("home")
    })
    
app.listen(3000, ()=>{
    console.log("Port Connection Established")
})


