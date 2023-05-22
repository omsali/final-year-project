import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/jobSlice";
import handlerReducer from "./features/handlerSlice";
const store = configureStore({
  reducer: {
    job: jobReducer,
    handler: handlerReducer,
  },
});

export default store;
