import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/jobSlice";
import handlerReducer from "./features/handlerSlice";
import studentReducer from "./features/studentSlice";
import recruiterReducer from "./features/recruiterSlice";
const store = configureStore({
  reducer: {
    job: jobReducer,
    handler: handlerReducer,
    student: studentReducer,
    recruiter: recruiterReducer,
  },
});

export default store;
