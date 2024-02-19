import { createSlice } from "@reduxjs/toolkit";
import Items from "../../assets/ProductList/products.js";

const addToCart = createSlice({
  name: "Add to cart",
  initialState: {
    cartItems: Items,
  },
  reducers: {
    updateWishlist: (state, action) => {
      state.cartItems[action.payload].Wishlist =
        !state.cartItems[action.payload].Wishlist;
    },
  },
});

export const { updateWishlist } = addToCart.actions;
export default addToCart.reducer;
