//footer inview true 일 경우 Dispatch()
import { createSlice } from "@reduxjs/toolkit";

const initialInview = {
  isBottom: false,
};

const inviewSlice = createSlice({
  name: "footerInview",
  initialState: initialInview,
  reducers: {
    setFooterInview(state, action) {
      state.isBottom = action.payload;
    },
  },
});

export const inviewReducer = inviewSlice.reducer;
export const inviewActions = inviewSlice.actions;
