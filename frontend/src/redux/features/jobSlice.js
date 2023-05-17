import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState= {
    jobs:[],
    name:"Om"
}

export const getAllJobs = createAsyncThunk("jobs/fetchJobs",async()=>{
    return await axios.get("http://localhost:5000/api/v1/jobs")
})

const jobSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllJobs.fulfilled,(state,action)=>{
            state.jobs = action.payload.data.jobs
        })
    }
})
export default jobSlice.reducer
export const {} = jobSlice.actions
// http://localhost:3000/jobs