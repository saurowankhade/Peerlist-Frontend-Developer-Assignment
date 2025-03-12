import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const formSlices = createSlice({
  name: "input",
  initialState,
  reducers: {
    addInput: (state, action) => {
        state.formData = { ...state.formData, ...action.payload };
      },
    updateInput: (state, action) => {
      const { id, field, value } = action.payload;
      const item = state.data.find((item) => item.id === id);
      if (item) item[field] = value;
    },
  },
});

export const { addInput, updateInput } = formSlices.actions;
export default formSlices.reducer;
