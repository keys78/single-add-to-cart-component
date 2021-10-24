import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./productSlice";

export default configureStore({
  reducer: {
    products: productSliceReducer
  }
});
