const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("Content", contentSchema);