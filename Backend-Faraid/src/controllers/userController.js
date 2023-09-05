const response = require("../helpers/response");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const tokenData = process.env.JWT_SECRET;

// register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation name 
    if (!name) {
      return response(400, null, "Name and gender are required", res);
    }

    //  Validation password
    if (password.length < 6) {
      return response(400, null, "Password must be at least 6 characters", res);
    }

    // Validation email if already existing
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response(400, null, "Email already exists", res);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    response(201, user, "User created successfully", res);
  } catch (error) {
    console.error(error);
    response(500, null, "An error occurred", res);
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Validate password and email match
    if (!user || !passwordMatch) {
      return response(400, null, "Incorrect email or password", res);
    }

    // create profile credentials
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        email: user.email,
      },
      tokenData
    );
    res
      .status(200)
      .set("Authorization", `Bearer ${token}`)
      .json({
        success: true,
        message: "Login successful",
        token,
      });
  } catch (error) {
    response(400, null, "An error occurred", res);
    console.error(error);
  }
};


module.exports = {
  registerUser,
  loginUser,
};