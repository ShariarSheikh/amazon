import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

//global store
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
