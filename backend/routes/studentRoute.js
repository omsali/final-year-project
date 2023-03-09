const express = require("express");
const {
  // createStudentUser,
  getAllStudents,
  registerStudentUser,
  loginUser,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/students").get(getAllStudents);
router.route("/student/register").post(registerStudentUser);

// Login user
router.route("/student/login").post(loginUser);

module.exports = router;
