import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastQue: {},
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    enQue(state, action) {
      state.toastQue[action.payload.id] = {
        id: action.payload.id,
        isRemove: action.payload.isRemove,
      };
    },
    deQue(state, action) {
      delete state.toastQue[action.payload];
    },
  },
});

export const toastReuder = toastSlice.reducer;
export const toastActions = toastSlice.actions;
