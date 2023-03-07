const Student = require("../models/studentModel");

// Create Student User
exports.createStudentUser = async (req, res, next) => {
  const student = await Student.create(req.body);
  res.status(201).json({
    success: true,
    student,
  });
};

// Get all Students -- Admin
exports.getAllStudents = async (req, res, next) => {
  const students = await Student.find();
  res.status(200).json({
    success: true,
    students,
  });
};
