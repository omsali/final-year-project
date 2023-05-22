import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  profileTab: "overview",
};

const handlerSlice = createSlice({
  name: "handlerSlice",
  initialState,
  reducers: {
    changeProfileTab: (state, action) => {
      state.profileTab = action.payload;
    },
  },
});

export const { changeProfileTab } = handlerSlice.actions;
export default handlerSlice.reducer;
