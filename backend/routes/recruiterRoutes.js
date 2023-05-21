const express = require("express");
const {
  registerRecruiterUser,
  loginRecruiter,
  getStudentsAppliedForSpecificJob,
} = require("../controllers/recruiterController");

const router = express.Router();

router.route("/recruiter/register").post(registerRecruiterUser);
router.route("/recruiter/login").post(loginRecruiter);
router
  .route("/recruiter/students_applied")
  .get(getStudentsAppliedForSpecificJob);

module.exports = router;
