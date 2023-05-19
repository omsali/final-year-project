const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const studentSchema = new mongoose.Schema({
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
  contact_number: {
    type: Number,
    maxLength: [10, "Contact Number cannot exceed 10 characters"],
  },
  class: {
    type: String,
  },
  primary_role: {
    type: String,
    // required: true,
  },
  bio: {
    type: String,
    // required: true,
  },
  profile_image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "student",
  },
  yoe:{
    type:Number,
    default:0,
  },
  skills: [],
  linkedin_profile: {
    type: String,
    default:""
  },
  github_profile: {
    type: String,
    default:""
  },
  leetcode_profile: {
    type: String,
    default:""
  },
  personal_website: {
    type: String,
    default:""
  },
  achievements: {
    type: String,
    default:""
  },
  projects: [
    {
      name: {
        type: String,
        default:""
      },
      summary: {
        type: String,
        default:""
      },
      github_link: {
        type: String,
        default:""
      },
      live_link: {
        type: String,
        default:""
      },
      description: {
        type: String,
        default:""
      },
    },
  ],
  cgpa: {
    type: Number,
    default:0
    // required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});


// Hashing Password
studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// JWT Token
studentSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password
studentSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// // Generating Password reset token
// studentSchema.methods.getResetPasswordToken = function () {
//   // Generating Token
//   const resetToken = crypto.randomBytes(20).toString("hex");

//   // Hashing and adding to user schema
//   this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//   this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

//   return resetToken;
// };

module.exports = mongoose.model("Student", studentSchema);
