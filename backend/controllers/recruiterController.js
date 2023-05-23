const Recruiter = require("../models/recruiterModel");
const Job = require("../models/jobModel");
const Student = require("../models/studentModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

//Recruiter registration
exports.registerRecruiterUser = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, password, company_name, company_info } =
    req.body;
  const recruiter = await Recruiter.create({
    firstName,
    lastName,
    email,
    password,
    company_name,
    company_info,
  });
  res.status(200).json({
    success: true,
    message: "User Recruiter created successfully",
    recruiter,
  });
  // sendToken(recruiter, 201, res);
});

//Recruiter login
exports.loginRecruiter = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new ErrorHandler("Please enter email and password correctly"),
      400
    );
  }
  const user = await Recruiter.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // sendToken(user, 200, res);
});

//logout
// exports.logout = catchAsyncErrors(async (req, res, next) => {
//   res.cookie("token", null, {
//     expires: new Date(Date.now()),
//     httpOnly: true,
//   });

//   res.status(200).json({
//     success: true,
//     message: "Logged out successfully",
//   });
// });
exports.getStudentsAppliedForSpecificJob = catchAsyncErrors(
  async (req, res, next) => {
    const { job_id, recruiter_id } = req.body;
    const { applied_students } = await Job.findById({ _id: job_id });
    const students = await Student.find({ _id: { $in: applied_students } });
    res.status(200).json({
      success: true,
      students,
    });
  }
);

exports.getJobPostedByRecruiter = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const jobs = await Job.find({ recruiter_id: id });
  res.status(200).json({
    success: true,
    message: "Jobs posted by Recruiter fetched successfully",
    jobs,
  });
});
