const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/item", (err)=>{
  if(err) throw err;
  console.log("connected to the database");
});

app.listen(PORT, ()=>{
  console.log("server is running on port" + PORT);
})
