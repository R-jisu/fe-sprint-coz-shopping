import { createSlice } from "@reduxjs/toolkit";
import { toastLimit } from "../values/constValue";

const initialState = {
  toastQue: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    enQue(state, action) {
      if (state.toastQue.length > toastLimit) {
        state.toastQue.splice(0, state.toastQue.length - toastLimit + 1);
      }
      state.toastQue.push(action.payload.action);
    },
    deQue(state) {
      state.toastQue.shift();
    },
  },
});

export const toastReuder = toastSlice.reducer;
export const toastActions = toastSlice.actions;
