import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  jobs: [],
  // Static studentId and recruiter to fetch data
  id: "646f3b77395af6b944353c8b",
  recruiter_id: "646f4117395af6b944353c8d",
  // ************
  appliedJobs: [],
  applyStatus: [],
  savedJobs: [],
  savedStatus: [],
};

export const getAllJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  return await axios.get("http://localhost:5000/api/v1/jobs");
});

export const getAppliedJobs = createAsyncThunk(
  "jobs/appliedJobs",
  async (id) => {
    return await axios.get(
      `http://localhost:5000/api/v1/job/${id}/applied_jobs`
    );
  }
);

export const getSavedJobs = createAsyncThunk("jobs/savedJobs", async (id) => {
  return await axios.get(
    `http://localhost:5000/api/v1/job/${id}/get_saved_jobs`
  );
});

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    changeApplyStatus: (state, action) => {
      state.applyStatus = action.payload;
    },
    changeSavedStatus: (state, action) => {
      state.savedJobs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      state.jobs = action.payload.data.jobs;
    });
    builder.addCase(getAppliedJobs.fulfilled, (state, action) => {
      state.appliedJobs = action.payload.data.student_appliedJobs;
    });
    builder.addCase(getSavedJobs.fulfilled, (state, action) => {
      state.savedJobs = action.payload.data.user_saved_jobs;
    });
  },
});
export default jobSlice.reducer;
export const { changeApplyStatus, changeSavedStatus } = jobSlice.actions;
// http://localhost:3000/jobs
