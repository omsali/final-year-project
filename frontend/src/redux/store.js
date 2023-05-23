import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/jobSlice";
import handlerReducer from "./features/handlerSlice";
import studentReducer from "./features/studentSlice";
const store = configureStore({
  reducer: {
    job: jobReducer,
    handler: handlerReducer,
    student: studentReducer,
  },
});

export default store;
