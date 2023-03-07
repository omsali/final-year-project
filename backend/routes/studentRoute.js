const express = require("express");
const {
  createStudentUser,
  getAllStudents,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/students").get(getAllStudents);
router.route("/student/new").post(createStudentUser);

module.exports = router;
