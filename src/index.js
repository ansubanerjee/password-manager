import connectToDB from "./initiallizer/db.js";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import login from "./routes/login.js";
import signup from "./routes/signup.js";
import newpassword from "./routes/newpassword.js"
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


app.listen(3000, ()=>{
    console.log("Port Connection Established")
})

app.use("/login", login);
app.use("/signup", signup)
app.use("/newpassword", newpassword)  
