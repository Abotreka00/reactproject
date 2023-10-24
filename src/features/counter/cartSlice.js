import { createSlice } from "@reduxjs/toolkit";

export const cartProduct = createSlice({
  name: "cartProduct",
  initialState: [],
  reducers: {
    Addproduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { Addproduct } = cartProduct.actions;

export default cartProduct.reducer;
