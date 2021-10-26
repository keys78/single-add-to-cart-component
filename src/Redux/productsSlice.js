import { createSlice } from "@reduxjs/toolkit";
import { products } from "../components/data";

export const productsSlice = createSlice({
  name: "products",
  initialState: products,

  reducers: {

  }
});

export const getProducts = state => state.products

export default productsSlice.reducer;