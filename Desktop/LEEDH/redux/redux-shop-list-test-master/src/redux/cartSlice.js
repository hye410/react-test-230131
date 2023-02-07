import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name : 'cart',
  initialState : {
    productId:[]
  },
  reducers : {
    addToCart(state,action){
      state.productId = [action.payload,...state.productId];
    },
    removeFromCart(state,action){
      state.productId = state.productId.filter(item => item !== action.payload);
    }
  }
})

export let { addToCart,removeFromCart } = cart.actions;

export default cart;