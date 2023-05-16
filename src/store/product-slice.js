import { createSlice } from "@reduxjs/toolkit";

const initialProduct = {
  product: [],
  bookmarked: [],
  type: "All",
  // filteredData: [],
  // filteredBookmarkedData: [],
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
        action.payload.map((el) => {
          if (bookmarkArr.includes(el.id)) {
            state.bookmarked[bookmarkArr.findIndex((id) => id === el.id)] = el;
          }
        });
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
    setFilter(state, action) {
      state.type = action.payload;
      // state.filteredData = state.product.filter(
      //   (el) => el.type === action.payload
      // );
      // state.filteredBookmarkedData = state.bookmarked.filter(
      //   (el) => el.type === action.payload
      // );
    },
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
