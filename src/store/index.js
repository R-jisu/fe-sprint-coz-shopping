import { configureStore } from "@reduxjs/toolkit";
import { inviewReducer } from "./footer-inview-slice";
import { productReducer } from "./product-slice";
import { toastReuder } from "./toast-slice";
import { UIReducer } from "./ui-slice";

const store = configureStore({
  reducer: {
    product: productReducer,
    ui: UIReducer,
    footerInview: inviewReducer,
    toast: toastReuder,
  },
});

export default store;
