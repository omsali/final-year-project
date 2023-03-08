const express = require("express");
const {
  // createStudentUser,
  getAllStudents,
  registerStudentUser,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/students").get(getAllStudents);
router.route("/student/register").post(registerStudentUser);

module.exports = router;
