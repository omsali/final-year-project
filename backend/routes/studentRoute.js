const express = require("express");
const {
  // createStudentUser,
  getAllStudents,
  registerStudentUser,
  loginUser,
  createNewProfile,
  getStudentInfo,
  updateStudentAboutSection,
  updateStudentSocials,
  updateStudentAchievements,
  updateStudentSkills,
} = require("../controllers/studentController");

const router = express.Router();

router.route("/students").get(getAllStudents);
router.route("/student/register/new").post(registerStudentUser);
router.route("/student/register/createprofile").post(createNewProfile);
router.route("/student/:id/info").get(getStudentInfo);
router.route("/student/:id/update_about").put(updateStudentAboutSection);
router.route("/student/:id/update_socials").put(updateStudentSocials);
router.route("/student/:id/update_achievements").put(updateStudentAchievements);
router.route("/student/:id/update_skills").put(updateStudentSkills);

// Login user
router.route("/student/login").post(loginUser);

module.exports = router;
