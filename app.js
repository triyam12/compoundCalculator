const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cors = require("cors");
const mountRoutes = require('./router')


const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
dotenv.config({ path: "./env" });


// const User = require('./model/userSchema');
app.use(express.json());
mountRoutes(app)
const PORT = process.env.PORT;

app.get("/", async(req, res) => {
  res.status(200).json({ message: "Hello Testing 1 2 3 4 ..." });
})


app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT}`);
});
