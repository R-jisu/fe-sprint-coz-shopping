import { createSlice } from "@reduxjs/toolkit";

const initialProduct = {
  product: [],
  bookmarked: [],
  type: "All",
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProduct,
  reducers: {
    storeFetchedData(state, action) {
      //Todo 북마크 해쉬로 바꾸기
      const bookmarkArr = JSON.parse(window.localStorage.getItem("bookmark"));
      if (bookmarkArr !== null) {
        state.product = action.payload.map((el) => {
          if (bookmarkArr.includes(el.id)) return { ...el, isBookmark: true };
          else return el;
        });
        action.payload.map((el) => {
          const findIndex = bookmarkArr.findIndex((id) => id === el.id);
          if (findIndex !== -1) {
            state.bookmarked[findIndex] = el;
          }
        });
      } else {
        state.product = action.payload;
      }
    },
    addBookmark(state, action) {
      let bookmarkArr = JSON.parse(window.localStorage.getItem("bookmark"));
      const index = state.product.findIndex((el) => el.id === action.payload);
      state.product[index] = { ...state.product[index], isBookmark: true };
      bookmarkArr.unshift(action.payload);
      window.localStorage.setItem("bookmark", JSON.stringify(bookmarkArr));
      state.bookmarked.unshift(state.product[index]);
    },
    removeBookmark(state, action) {
      let bookmarkArr = JSON.parse(window.localStorage.getItem("bookmark"));
      if (!bookmarkArr) {
        const bookmarkMap = new Map();
        window.localStorage.setItem("bookmark", JSON.stringify(bookmarkMap));
        bookmarkArr = [];
      }
      const index = state.product.findIndex((el) => el.id === action.payload);
      state.product[index] = { ...state.product[index], isBookmark: false };
      const findIndex = bookmarkArr.findIndex((el) => el === action.payload);
      bookmarkArr.splice(findIndex, 1);
      window.localStorage.setItem("bookmark", JSON.stringify(bookmarkArr));
      state.bookmarked = state.bookmarked.filter(
        (el) => el.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.type = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
