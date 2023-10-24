import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let fetchProduct = createAsyncThunk(
  "productSlice/fetchProduct",
  async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: [{ id: 1, title: "hisham" }],
  reducers: {
    Getproductname: (state) => {
      return state;
    },
    Getproductid: (state) => {
      return state.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { Getproductname, Getproductid } = productSlice.actions;

export default productSlice.reducer;
