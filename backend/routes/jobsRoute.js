const express = require("express");
const {
  getAllJobs,
  createJob,
  applyJob,
  getAppliedJobs,
  saveJob,
  getSavedJobs,
} = require("../controllers/jobsController");
const router = express.Router();

router.route("/jobs").get(getAllJobs);
router.route("/job/new").post(createJob);
router.route("/job/apply").post(applyJob);
router.route("/job/:id/applied_jobs").get(getAppliedJobs);
router.route("/job/save").post(saveJob);
router.route("/job/:id/get_saved_jobs").get(getSavedJobs);

module.exports = router;
