import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // This holds all inputs
};

const formSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addInput: (state, action) => {
        const { id } = action.payload;
        const existingInput = state.data.find((item) => item.id === id);
  
        if (existingInput) {
          // Update existing input
          Object.assign(existingInput, action.payload);
        } else {
          // Add new input
          state.data.push({ ...action.payload });
        }

    //     const existingIndex = state.data.findIndex(item => item.id === action.payload.id);
    //   if (existingIndex !== -1) {
    //     state.data[existingIndex] = action.payload; // Update existing input
    //   } else {
    //     state.data.push(action.payload); // Add new input
    //   }

    }, reorderInputs: (state, action) => {
        state.data = action.payload; // Update the order in Redux
      },
  },
});

export const { addInput, reorderInputs } = formSlice.actions;
export default formSlice.reducer;
