import connectToDB from "./initiallizer/db.js";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import login from "./routes/login.js";
import signup from "./routes/signup.js";
import newpassword from "./routes/newpassword.js"
import signup_act from "./routes/signup.js";
const app = express()


//Objects Definition

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const templatePath = path.join(__dirname, '../templates')    

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

connectToDB();

login.get("/", (req, res)=>{
    res.render("login")
})
signup.get("/signup", (req, res)=>{
    res.render("signup")
})
newpassword.get("/newpassword", (req, res)=>{
    res.render("newpassword")
})

app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended: false}))
app.use("/login", login);
app.use("/signup", signup_act)
app.use("/newpassword", newpassword)

app.listen(3000, ()=>{
    console.log("Port Connection Established")
})