import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const addToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state = initialState, action) => {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              );
        
              if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                  ...state.cartItems[existingIndex],
                  quantity: state.cartItems[existingIndex].quantity + 1,
                };
        } else {
            let tempProductItem = { ...action.payload, quantity: 1 };
            state.cartItems.push(tempProductItem);
    } localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
},      
        removeFromCart: (state, action) => {
          const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
          state.cartItems = newCartItems;
},
        decreaseCartQuantity: (state, action) => {
          const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

          if(state.cartItems[itemIndex].quantity > 1) {
            state.cartItems[itemIndex].quantity -= 1
          } else if (state.cartItems[itemIndex.quantity] === 1) {
            const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartItems = nextCartItems;
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
},
        increaseCartQuantity: (state, action) => {
          const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
          state.cartItems[itemIndex].quantity += 1;
        },

        getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
}

})

export const {addToCart, removeFromCart, decreaseCartQuantity, increaseCartQuantity, updateSubTotal, getTotals} = addToCartSlice.actions;

export default addToCartSlice.reducer;