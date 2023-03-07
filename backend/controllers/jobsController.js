const Job = require("../models/jobModel");

exports.createJob = async (req, res, next) => {
  const job = await Job.create(req.body);
  res.status(201).json({
    success: true,
    job,
  });
};

exports.getAllJobs = (req, res, next) => {
  res.status(200).json({ message: "Router is working fine" });
};
