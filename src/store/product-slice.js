import { createSlice } from "@reduxjs/toolkit";

const initialProduct = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProduct,
  reducers: {
    storeFetchedData(state, action) {
      state.product = action.payload;
    },
    //Todo 북마크 프로퍼티 추가하는 action
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
