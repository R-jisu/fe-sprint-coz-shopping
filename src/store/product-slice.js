import { createSlice } from "@reduxjs/toolkit";

const initialProduct = {
  product: [],
  bookmarked: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProduct,
  reducers: {
    storeFetchedData(state, action) {
      const bookmarkArr = JSON.parse(window.localStorage.getItem("bookmark"));
      if (bookmarkArr.length > 0 || bookmarkArr !== null) {
        state.product = action.payload.map((el) => {
          if (bookmarkArr.includes(el.id)) return { ...el, isBookmark: true };
          else return el;
        });
        state.bookmarked = action.payload.filter((el) =>
          bookmarkArr.includes(el.id)
        );
      } else {
        state.product = action.payload;
      }
    },
    toggleBookmark(state, action) {
      let bookmarkArr = JSON.parse(window.localStorage.getItem("bookmark"));
      if (!bookmarkArr) {
        window.localStorage.setItem("bookmark", JSON.stringify([]));
        bookmarkArr = [];
      }
      const index = state.product.findIndex((el) => el.id === action.payload);
      if (bookmarkArr.includes(action.payload)) {
        state.product[index] = { ...state.product[index], isBookmark: false };
        const bookmarkArr = JSON.parse(window.localStorage.getItem("bookmark"));
        const findIndex = bookmarkArr.findIndex((el) => el === action.payload);
        bookmarkArr.splice(findIndex, 1);
        window.localStorage.setItem("bookmark", JSON.stringify(bookmarkArr));
        state.bookmarked = state.bookmarked.filter(
          (el) => el.id !== action.payload
        );
      } else {
        state.product[index] = { ...state.product[index], isBookmark: true };
        bookmarkArr.unshift(action.payload);
        window.localStorage.setItem("bookmark", JSON.stringify(bookmarkArr));
        state.bookmarked.unshift(state.product[index]);
      }
    },
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
