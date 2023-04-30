// store.js

import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slice/slice1";
import voterReducer from "./slice/slice2";

const store = configureStore({
  reducer: {
    data: adminReducer,
    voterData:voterReducer
  }
});

export default store;
