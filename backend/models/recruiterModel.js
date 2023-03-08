const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  company_info: {
    type: String,
  },
});
module.exports = mongoose.model("Recruiter", recruiterSchema);
