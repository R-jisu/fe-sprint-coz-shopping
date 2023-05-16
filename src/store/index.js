import { configureStore } from "@reduxjs/toolkit";
import { inviewReducer } from "./footer-inview-slice";
import { productReducer } from "./product-slice";
import { UIReducer } from "./ui-slice";

const store = configureStore({
  reducer: {
    product: productReducer,
    ui: UIReducer,
    footerInview: inviewReducer,
  },
});

export default store;
