const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  job_title: {
    type: String,
    required: [true, "Please enter Job Title"],
  },
  job_description: {
    type: String,
  },
  type_of_position: {
    type: String,
    required: true,
  },
  primary_role: {
    type: String,
  },
  work_experience: {
    type: Number,
  },
  skills_required: [{ type: String }],
  salary_range: {
    type: String,
  },
  location: {
    type: String,
  },
  remote_work_policy: {
    type: String,
  },
});

module.exports = mongoose.model("Jobs", jobSchema);
  