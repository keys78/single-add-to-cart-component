import { createSlice } from "@reduxjs/toolkit";
// import { products } from "../components/data";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },

  reducers: {
    addItemToCart: (state, action) => {
      const newId = (Date.now())

      state.cartItems.push({
        id: newId,
        productId: action.payload.product.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity = action.payload.product.price
      })
      alert(action.payload.product.name + ' ' + 'added to cart')
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId
      )
    }
    
  }
});

export const getCartItems = state => state.cart.cartItems

export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartItem) => {
    return cartItem.totalPrice + total;
  }, 0);
}

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;