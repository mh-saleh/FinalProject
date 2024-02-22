import { configureStore } from "@reduxjs/toolkit";
import addToCart from "../slices/addToCart";
import search from "../slices/search";
import categorize from "../slices/categorize";
export default configureStore({
  reducer: {
    Cart: addToCart,
    Search: search,
    Catagory: categorize,
  },
});
