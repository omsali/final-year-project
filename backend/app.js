const express = require("express");
const app = express();
app.use(express.json());
// Route Imports
const jobs = require("./routes/jobsRoute");
app.use("/api/v1", jobs);

module.exports = app;
