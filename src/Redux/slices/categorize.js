import Items from "../../assets/ProductList/products.js";
import { createSlice } from "@reduxjs/toolkit";

const categorize = createSlice({
  name: "category",
  initialState: {
    products: Items,
    sortedItems: Items,
    CheckedItem: Items,
    SearchedItem: Items,
    selectedCategories: [], // Add selectedCategories
  },
  reducers: {
    matchItem: (state, action) => {
      state.sortedItems = state.CheckedItem.filter((item) => {
        const itemName = item.Name.toLowerCase();
        return itemName.includes(action.payload.toLowerCase());
      });
      state.SearchedItem = state.products.filter((item) => {
        const itemName = item.Name.toLowerCase();
        return itemName.includes(action.payload.toLowerCase());
      });
    },
    toggleCategory: (state, action) => {
      const { name, checked } = action.payload;
      if (checked) {
        //  checkbox is checked
        state.selectedCategories.push(name);
      } else {
        //  checkbox is unchecked
        state.selectedCategories = state.selectedCategories.filter(
          (selectedCategory) => selectedCategory !== name
        );
      }

      // Filter items based on selected categories
      state.sortedItems = state.SearchedItem.filter((item) => {
        return state.selectedCategories.every(
          (selectedCategory) => item.Tags[selectedCategory]
        );
      });
      state.CheckedItem = state.products.filter((item) => {
        return state.selectedCategories.every(
          (selectedCategory) => item.Tags[selectedCategory]
        );
      });
    },
  },
});

export const { matchItem, toggleCategory } = categorize.actions;
export default categorize.reducer;
