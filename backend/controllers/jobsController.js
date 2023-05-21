const Job = require("../models/jobModel");
const Student = require("../models/studentModel");
const Recruiter = require("../models/recruiterModel");

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

exports.applyJob = catchAsyncErrors(async (req, res, next) => {
  const { student_id, recruiter_id, jobId } = req.body;
  const updatedStudent = await Student.findOneAndUpdate(
    { _id: student_id },
    { $push: { appliedJobs: jobId } },
    { new: true }
  );
  // Job in that there will be applied jobs
  const updatedJob = await Job.findOneAndUpdate(
    { _id: jobId },
    { $push: { applied_students: student_id } },
    { new: true }
  );
  res.status(200).json({
    success: true,
    message: "Applied for job successfully",
    updatedStudent,
    updatedJob,
  });
});

exports.getAppliedJobs = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { appliedJobs } = await Student.findById({ _id: id });
  const student_appliedJobs = await Job.find({ _id: { $in: appliedJobs } });
  res.status(200).json({
    success: true,
    student_appliedJobs,
  });
});

exports.saveJob = catchAsyncErrors(async (req, res, next) => {
  const { jobId, studentId } = req.body;
  // const job = await Job.findById({ _id: jobId });
  const student = await Student.findOneAndUpdate(
    { _id: studentId },
    { $push: { savedJobs: jobId } }
  );
  res.status(200).json({
    success: true,
    message: "Job saved successfully",
    student,
  });
});

exports.getSavedJobs = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { savedJobs } = await Student.findById({ _id: id });
  const user_saved_jobs = await Job.find({ _id: { $in: savedJobs } });
  res.status(200).json({
    success: true,
    message: "Saved Jobs fetched successfully",
    user_saved_jobs,
  });
});
