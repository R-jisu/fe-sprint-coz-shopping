import { createSlice } from "@reduxjs/toolkit";

const initialType = { type: "All" };

const filterSlice = createSlice({
  name: "filter",
  initialState: initialType,
  reducers: {
    setFilter(state, action) {
      state.type = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
