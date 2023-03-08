const Student = require("../models/studentModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// Create Student User
// User Registration
exports.registerStudentUser = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const student = await Student.create({
    firstName,
    lastName,
    email,
    password,
  });
  res.status(201).json({
    success: true,
    student,
  });
});

// Get all Students -- Admin
exports.getAllStudents = async (req, res, next) => {
  const students = await Student.find();
  res.status(200).json({
    success: true,
    students,
  });
};
