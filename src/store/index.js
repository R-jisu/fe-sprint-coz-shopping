import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter-slice";
import { inviewReducer } from "./footer-inview-slice";
import { productReducer } from "./product-slice";
import { UIReducer } from "./ui-slice";

const store = configureStore({
  reducer: {
    product: productReducer,
    ui: UIReducer,
    filter: filterReducer,
    footerInview: inviewReducer,
  },
});

export default store;
