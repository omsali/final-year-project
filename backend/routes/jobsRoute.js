const express = require("express");
const { getAllJobs, createJob } = require("../controllers/jobsController");
const router = express.Router();

router.route("/jobs").get(getAllJobs);
router.route("/job/new").post(createJob);

module.exports = router;
