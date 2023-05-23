const express = require("express");
const {
  registerRecruiterUser,
  loginRecruiter,
  getStudentsAppliedForSpecificJob,
  getJobPostedByRecruiter,
} = require("../controllers/recruiterController");

const router = express.Router();

// Auth Routes
router.route("/recruiter/register").post(registerRecruiterUser);
router.route("/recruiter/login").post(loginRecruiter);

// Functional routes
router
  .route("/recruiter/:id/students_applied")
  .get(getStudentsAppliedForSpecificJob);
router.route("/recruiter/:id/jobs").get(getJobPostedByRecruiter);

module.exports = router;
