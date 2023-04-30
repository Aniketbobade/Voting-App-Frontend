import { createSlice } from "@reduxjs/toolkit";

const voterSlice = createSlice({
  name: "voterData",
  initialState: { value: null },
  reducers: {
    setVoterData: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setVoterData } = voterSlice.actions;

export default voterSlice.reducer;