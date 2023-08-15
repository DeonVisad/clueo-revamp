import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            "id" : "1",
            "title" : "Forest Grove",
            "image" : "forestgrove",
            "ingredients" : "Oak Moss, Amber, Leather ",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "2",
            "title" : "Date Night",
            "image" : "datenight",
            "ingredients" : "Black Currant, Jasmine, Vanilla ",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "3",
            "title" : "Golden Hour",
            "image" : "goldenhour",
            "ingredients" : "Sandlewood, Amber ",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "4",
            "title" : "Laundry Day",
            "image" : "laundry",
            "ingredients" : "Linen, Lavender ",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "5",
            "title" : "Ocean Mist",
            "image" : "oceanmist",
            "ingredients" : "Petigrain, Dark Musk",
            "price" : 24.99,
            "quantity": 1
        },
    ]
}

const allProductsSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers: {
        allProducts: (state = initialState) => {
            return state;
        }
    }
})

export const {allProducts} = allProductsSlice.actions;

export default allProductsSlice.reducer;