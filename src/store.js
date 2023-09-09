import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlicer";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
