const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const dataRoute = require("./routes/data");
// const clientRoute = require("./routes/client");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{ console.log("Connected to MongoDB") }
);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/data", dataRoute);

app.listen(8000, ()=>{
    console.log(("Backend server is running!"))
})