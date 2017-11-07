const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  store: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    required: true,

  }
})

module.exports = mongoose.model("Item", itemSchema);
