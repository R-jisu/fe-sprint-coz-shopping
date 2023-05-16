import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter-slice";
import { productReducer } from "./product-slice";
import { UIReducer } from "./ui-slice";

const store = configureStore({
  reducer: { product: productReducer, ui: UIReducer, filter: filterReducer },
});

export default store;
