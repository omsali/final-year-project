const express = require("express");
const app = express();
app.use(express.json());
// Route Imports
const jobs = require("./routes/jobsRoute");
const students = require("./routes/studentRoute");
app.use("/api/v1", jobs);
app.use("/api/v1", students);

module.exports = app;
