import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from './Features/allProductsSlice';
import addToCartReducer from './Features/addToCartSlice';

export const store = configureStore({
    reducer: {
        allProducts: allProductsReducer,
        cart: addToCartReducer,
    }
})