import { createSlice } from "@reduxjs/toolkit";
import { products } from "../components/data";

export const productSlice = createSlice({
  name: "products",
  initialState: products,

  reducers: {
    increaseItemQuantity: (state, product) => {
      products.map((product) => {
        state.product.quantity = 5
      })
    },
  }
});

// Action creators are generated for each case reducer function
export const { increaseItemQuantity } = productSlice.actions;

export default productSlice.reducer;