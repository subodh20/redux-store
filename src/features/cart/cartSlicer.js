import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
  },
});

export const { increment } = cartSlice.actions;
export const inState = (state) => state.initialState.amount;
export default cartSlice.reducer;
