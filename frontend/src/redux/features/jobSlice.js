import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  jobs: [],
  // Static studentId and recruiter to fetch data
  id: "640760d9316868c1913b5c2e",
  recruiter_id: "646cb0cc7b2a9d4a2761105f",
  // ************
  appliedJobs: [],
  applyStatus: [],
  savedJobs: [],
  savedStatus: [],
  filteredJobs: [],
  sliderValue: 0,
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
      state.savedStatus = action.payload;
    },
    filterJobsBySkills: (state, action) => {
      state.filteredJobs = state.jobs.filter((job) =>
        job.skills_required.includes(action.payload)
      );
    },
    searchJob: (state, action) => {
      state.filteredJobs = state.jobs.filter((job) =>
        job.company_name.includes(action.payload)
      );
    },
    filterByJobType: (state, action) => {
      state.filteredJobs = state.jobs.filter(
        (job) => job.type_of_position === action.payload
      );
    },
    clearFilter: (state, action) => {
      state.filteredJobs = state.jobs;
    },
    filter: (state, action) => {
      switch (action.type) {
        case "SLIDER": {
          state.sliderValue = action.payload;
          state.filteredJobs = state.jobs.filter(
            (job) => job.yoe <= state.sliderValue
          );
        }

        case "REMOTE_CULTURE":
          state.filteredJobs = state.jobs.filter(
            (job) => job.vremote_work_policy.toLowerCase() === "remote"
          );
      }
    },
    // filterBySkills: (state, action) => {
    //   state.filteredJobs = state.jobs.filter((job) => job.skills_required.find(action.payload));
    // },
    // filterByType: (state, action) => {
    //   state.filteredJobs = state.jobs.filter((job) => job.type_of_position === action.payload);
    // },
    // filterByYOE: (state, action) => {
    //   console.log(action.payload);
    //   state.sliderValue = action.payload;
    //   state.filteredJobs = state.jobs.filter((job) => job.yoe <= state.sliderValue);
    // },
    // clearFilter: (state,action) => {
    //   state.filteredJobs = state.jobs;
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      state.jobs = action.payload.data.jobs;
      state.filteredJobs = action.payload.data.jobs;
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
export const {
  changeApplyStatus,
  changeSavedStatus,
  filteredJobs,
  filter,
  filterJobsBySkills,
  searchJob,
  filterByJobType,
  clearFilter,
} = jobSlice.actions;
// http://localhost:3000/jobs
