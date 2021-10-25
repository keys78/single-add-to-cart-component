import { createSlice } from "@reduxjs/toolkit";
import { products } from "../components/data";

export const productsSlice = createSlice({
  name: "products",
  initialState: products,

  reducers: {
    addItemToCart: (state, action) => {
      const newId = (Date.now())

      state.cartItems.push({
        id: newId,
        productId: action.payload.product.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity = action.payload.product.price
      })
      alert(action.payload)
    }
  }
});

// export const getCartItems = state > state.cart.cartItems


// export const { addItemToCart } = productsSlice.actions;

// export default productsSlice.reducer;