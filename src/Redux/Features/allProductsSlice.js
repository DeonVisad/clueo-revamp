import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            "id" : "1",
            "title" : "Forest Grove",
            "image" : "forestgrove",
            "ingredients" : "A calm and relaxing scent boasting accents of Oak Moss, Amber & Leather. Perfect for a reading session or bringing nature to you.",
            "price" : 24.99,
            "quantity": 1
        },
        {
            "id" : "2",
            "title" : "Date Night",
            "image" : "datenight",
            "ingredients" : "A calm and relaxing scent boasting accents of Black Currant, Jasmine & Vanilla. Perfect for when you're getting ready for a special night. ",
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
        },

        sortProducts: (state = initialState) => {
            state.products.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
        }
    }

})

export const {allProducts, sortProducts} = allProductsSlice.actions;

export default allProductsSlice.reducer;