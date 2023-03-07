const Job = require("../models/jobModel");

// Create Job -- Recruiter
exports.createJob = async (req, res, next) => {
  const job = await Job.create(req.body);
  res.status(201).json({
    success: true,
    job,
  });
};

// Get all Jobs -- Student
exports.getAllJobs = async (req, res, next) => {
  const jobs = await Job.find();
  res.status(200).json({
    success: true,
    jobs,
  });
};
