const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler.js");



const User = require('./collection-models/user');
const Password = require('./collection-models/password');

const cors = require('cors');
require('dotenv/config');

app.use(cors());

const api = process.env.API_URL;
const usersRouter = require('./routers/users');
const passwordsRouter = require('./routers/passwords');


app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler);


app.use(`${api}/users`, usersRouter)
app.use(`${api}/passwords`, passwordsRouter)


mongoose.connect(process.env.connectionstring)
.then (()=>{
    console.log("Database Connection Established")
})
.catch((err)=>{
    console.log(err)
})


app.listen(4000, ()=>{
    console.log(api);
    console.log("Running at http://localhost:4000");
})