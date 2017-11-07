const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 6000;
const itemRoutes = require("./routes/item")

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/items", itemRoutes);

mongoose.connect("mongodb://localhost/item", (err)=>{
  if(err) throw err;
  console.log("connected to the Mongo database");
});

app.listen(PORT, ()=>{
  console.log("server is running on port " + PORT);
})
