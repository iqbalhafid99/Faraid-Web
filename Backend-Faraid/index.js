const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routes/userRouter");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// database connection
connectDB();

app.use(bodyParser.json());
app.use(cors());

// connect to router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});