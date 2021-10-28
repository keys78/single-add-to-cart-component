import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },

  reducers: {
    addItemToCart: (state, action) => {
      const newId = (Date.now())

      let item = state.cartItems.find(i => i.id !== newId)

      if (item) {
        alert('Item Already In Cart')
      } else {
        state.cartItems.push({
          id: newId,
          productId: action.payload.product.id,
          quantity: action.payload.quantity,
          cartImage: action.payload.product.cartImage,
          totalPrice: action.payload.quantity * action.payload.product.price
        })
        alert(action.payload.product.name + ' ' + 'Added To Cart')
      }
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
    return (cartItem.totalPrice + total);
  }, 0);
}

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;