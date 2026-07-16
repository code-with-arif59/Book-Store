import dotenv from "dotenv"
dotenv.config({quiet : true})
import { connectDB } from "./config/database.js";
import bookRoutes from "./routes/book-routes.js"

import express from 'express'
const app = express();

const PORT =  process.env.PORT || 9000;

//! DATABASE CONNECTION
connectDB();
//! MIDDLEWARES
express.urlencoded({ extended: true })
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//! ROUTES
app.use("/",bookRoutes)

app.listen(PORT,(er)=>{
    if(er) console.log(er);
    console.log(`server started at port ${PORT}`);
})
console.log("hi arif khan");

