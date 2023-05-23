const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  recruiter_id: {
    type: String,
    required: true,
  },
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
    type: String,
  },
  skills_required: [{ type: String }],
  salary_range: {
    type: {
      to: Number,
      from: Number,
    },
    default: {
      to: 0,
      from: 0,
    },
  },
  location: {
    type: Array,
    default: [],
  },
  remote_work_policy: {
    type: String,
  },
  applied_students: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Jobs", jobSchema);
