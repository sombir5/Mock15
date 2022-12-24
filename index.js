require("dotenv").config()
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT  || 8080;
const connectDB = require("./Config/db");
const userRouter = require("./AllRoutes/routes")
const app = express();

app.use(express.json())
app.use(cors());
app.use("/",userRouter)

app.listen(PORT,async()=>{
    await connectDB()
    console.log(`Running on http://localhost:${PORT}`)
})