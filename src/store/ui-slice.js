import { createSlice } from "@reduxjs/toolkit";

const initialUI = {
  modalId: "",
  //Todo toast
};

const UISlice = createSlice({
  name: "ui",
  initialState: initialUI,
  reducers: {
    openModal(state, action) {
      state.modalId = action.payload;
    },
    closeModal(state) {
      state.modalId = "";
    },
  },
});

export const UIActions = UISlice.actions;
export const UIReducer = UISlice.reducer;
