// dataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "data",
  initialState: { value: null },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setData } = adminSlice.actions;

export default adminSlice.reducer;
