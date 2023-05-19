const express = require("express");
const {
    registerRecruiterUser,
    loginRecruiter,
} = require("../controllers/recruiterController");

const router = express.Router();

router.route("/recruiter/register").post(registerRecruiterUser)
router.route("/recruiter/login").post(loginRecruiter)

module.exports = router;