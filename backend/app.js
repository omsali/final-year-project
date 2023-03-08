const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());
// Route Imports
const jobs = require("./routes/jobsRoute");
const students = require("./routes/studentRoute");
app.use("/api/v1", jobs);
app.use("/api/v1", students);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
