//Express
const express = require("express")
const app = express()

//Objects Definition
const path = require("path")
const hbs = require("hbs")
const Usercollection = require("./mongodb")
const Datacollection = require("./mongodb")

const templatePath = path.join(__dirname, '../templates')    

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res)=>{
    res.render("login")
})
app.get("/signup", (req, res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{

const data = {
    name: req.body.name,
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
    

app.listen(3000, ()=>{
    console.log("Port Connection Established")
})


