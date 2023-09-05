const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  const url = process.env.MONGODB_URL;

  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Connection error:", error);
    });
};

module.exports = connectDB;