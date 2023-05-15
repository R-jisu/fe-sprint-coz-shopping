import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product-slice";
import { UIReducer } from "./ui-slice";

const store = configureStore({
  reducer: { product: productReducer, ui: UIReducer },
});

export default store;
