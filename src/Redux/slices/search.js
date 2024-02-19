import { createSlice } from "@reduxjs/toolkit";

const Search = createSlice({
  name: "Search",
  initialState: {
    search: "",
  },
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { updateSearch } = Search.actions;
export default Search.reducer;
