const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const recruiterSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter firstName"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter lastName"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
    validate: [validator.isEmail, "Please enter correct email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minLength: [4, "Password should be atleast 4 characters "],
    select: false,
  },
  company_name: {
    type: String,
    required: true,
  },
  company_info: {
    type: String,
  },
  jobsPosted: {
    type: Array,
    default: [],
  },
});
module.exports = mongoose.model("Recruiter", recruiterSchema);

// Hashing Password
// recruiterSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });

// // JWT Token
// recruiterSchema.methods.getJWTToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };

// // Compare Password
// recruiterSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
