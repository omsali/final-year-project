const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
const errorMiddleware = require("./middleware/error");
app.use(express.json());
// Route Imports
const jobs = require("./routes/jobsRoute");
const students = require("./routes/studentRoute");
const recruiter = require("./routes/recruiterRoutes");

app.use("/api/v1", jobs);
app.use("/api/v1", students);
app.use("/api/v1", recruiter);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
