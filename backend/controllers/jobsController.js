const Job = require("../models/jobModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// Create Job -- Recruiter
exports.createJob = catchAsyncErrors(async (req, res, next) => {
  const job = await Job.create(req.body);
  res.status(201).json({
    success: true,
    job,
  });
});

// Get all Jobs -- Student
exports.getAllJobs = catchAsyncErrors(async (req, res, next) => {
  const jobs = await Job.find();
  res.status(200).json({
    success: true,
    jobs,
  });
});
