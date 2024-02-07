const express = require('express');
const cors = require("cors");
const app = express();
const connect = require("./db");
const doctorsRoutes=require("./routes/doctors")
app.use(express.json());
app.use(cors());
app.use("/doctors",doctorsRoutes)








app.listen(8080, ()=>{
    connect()
   
})