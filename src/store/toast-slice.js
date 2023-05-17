import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastQue: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    enQue(state, action) {
      state.toastQue.push(action.payload.action);
    },
    deQue(state) {
      state.toastQue.shift();
    },
  },
});

export const toastReuder = toastSlice.reducer;
export const toastActions = toastSlice.actions;
