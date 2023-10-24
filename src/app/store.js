import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import productSlice from "../features/counter/products";
import cartProduct from "../features/counter/cartSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice,
    cartprod: cartProduct,
  },
});
