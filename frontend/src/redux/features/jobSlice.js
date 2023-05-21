import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  jobs: [],
  id: "640760d9316868c1913b5c2e",
  appliedJobs: [],
  applyStatus: [],
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

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    changeApplyStatus: (state, action) => {
      state.applyStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      state.jobs = action.payload.data.jobs;
    });
    builder.addCase(getAppliedJobs.fulfilled, (state, action) => {
      state.appliedJobs = action.payload.data.student_appliedJobs;
    });
  },
});
export default jobSlice.reducer;
export const { changeApplyStatus } = jobSlice.actions;
// http://localhost:3000/jobs
