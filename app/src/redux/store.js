import { configureStore } from "@reduxjs/toolkit";
import formSlices from "./formSlices";

export const store = configureStore({
  reducer: {
    input: formSlices,
    
  },
  
});

export default store;
