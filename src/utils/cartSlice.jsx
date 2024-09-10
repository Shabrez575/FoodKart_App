import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cartItems: ["burger", "pizza"],
    cartItems: [],
  },
  reducers: {
    // We are mutating the state here.
    addItems: (state, action) => {
      // Vanilla(Older) Redux => Don't mutate state directly.

      // const newState = [...state];
      // newState.push(action.payload);
      // return newState;

      state.cartItems.push(action.payload);
    },
    removeItems: (state) => {
      state.cartItems.pop();
    },
    clearItems: (state) => {
      // RTK - either Mutate the existing state or return a new state.
      state.cartItems.length = 0; // originalState = [];
      // state.cartItems  = [];

      // return { items:[]}; // this new object will be replaced inside originalState = {items:[]};
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
