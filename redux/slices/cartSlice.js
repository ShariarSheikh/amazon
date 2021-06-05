import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    //add items
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    //remove items
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItems) => cartItems.id === action.payload.id
      );
      let newCartItems = [...state.items];

      if (index >= 0) {
        newCartItems.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not cart`
        );
      }
      //...
      state.items = newCartItems;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
