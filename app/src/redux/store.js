import { configureStore } from "@reduxjs/toolkit";
import formSlices from "./formSlices";

export const store = configureStore({
  reducer: {
    input: formSlices,
    // Add more slices here if needed
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
