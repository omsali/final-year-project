const express = require("express");
const {
  // createStudentUser,
  getAllStudents,
  registerStudentUser,
  loginUser,
  createNewProfile,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/students").get(getAllStudents);
router.route("/student/register/new").post(registerStudentUser);
router.route("/student/register/createprofile").post(createNewProfile);

// Login user
router.route("/student/login").post(loginUser);

module.exports = router;
