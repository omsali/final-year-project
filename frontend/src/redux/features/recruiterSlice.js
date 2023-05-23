import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  jobsPosted: [],
  applicants: [],
};

export const getPostedJobs = createAsyncThunk(
  "recruiter/getJobsPosted",
  async (id) => {
    return await axios.get(`http://localhost:5000/api/v1/recruiter/${id}/jobs`);
  }
);

export const getApplicantsForJob = createAsyncThunk(
  "recruiter/getApplicants",
  async (id) => {
    console.log("Id recieved is ",id)
    return await axios.get(
      `http://localhost:5000/api/v1/recruiter/${id}/students_applied`
    );
  }
);

const recruiterSlice = createSlice({
  name: "recruiter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostedJobs.fulfilled, (state, action) => {
      state.jobsPosted = action.payload.data.jobs;
    });
    builder.addCase(getApplicantsForJob.fulfilled, (state, action) => {
      console.log("Response recieved is ", action.payload.data);
      state.applicants = action.payload.data.students;
    });
  },
});

export const {} = recruiterSlice.actions;
export default recruiterSlice.reducer;
