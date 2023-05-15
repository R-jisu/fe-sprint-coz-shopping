import { createSlice } from "@reduxjs/toolkit";

const initialUI = {
  isOpen: false,
  productInfo: {},
  //Todo toast
};

const UISlice = createSlice({
  name: "ui",
  initialState: initialUI,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.productInfo = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.productInfo = {};
    },
  },
});

export const UIActions = UISlice.actions;
export const UIReducer = UISlice.reducer;
