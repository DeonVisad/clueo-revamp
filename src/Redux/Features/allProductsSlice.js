import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            "id" : "1",
            "title" : "Forest Grove",
            "image" : "forestgrove",
            "ingredients" : "A calm and relaxing scent boasting accents of Oak Moss, Amber & Leather. Perfect for a reading session.",
            "price" : 30,
            "quantity": 1,
            "sale": true,
        },
        {
            "id" : "2",
            "title" : "Date Night",
            "image" : "datenight",
            "ingredients" : "Elevate romance with Date Night. Indulge in Black Currant, Jasmine, and Vanilla scents for a captivating ambiance.",
            "price" : 30,
            "quantity": 1,
            "sale": true
        },
        {
            "id" : "3",
            "title" : "Golden Hour",
            "image" : "goldenhour",
            "ingredients" : "Golden Hour Soy Candle: Sandlewood & Amber scents for serene ambiance. Elevate your space with elegance. Perfect for thoughtful gifting.",
            "price" : 30,
            "quantity": 1,
            "sale": true
        },
        {
            "id" : "4",
            "title" : "Laundry Day",
            "image" : "laundry",
            "ingredients" : "Transform your home with Laundry Day. Embrace Linen and Lavender scents for a serene, refreshing atmosphere.",
            "price" : 30,
            "quantity": 1,
            "sale": true
        },
        {
            "id" : "5",
            "title" : "Ocean Mist",
            "image" : "oceanmist",
            "ingredients" : "Experience Ocean Mist, merging Petitgrain & Dark Musk. Immerse in a coastal escape with this enchanting blend.",
            "price" : 30,
            "quantity": 1,
            "sale": false
        },
    ],
    filteredData: [],
    
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
        },

        popularProducts: (state = initialState) => {
            return initialState;
        },

        saleProducts : (state = initialState) => {
            
            return {...state, filteredData: state.products.filter(product => product.sale !== false)}
        }



    }

})

export const {allProducts, sortProducts, popularProducts, saleProducts} = allProductsSlice.actions;

export default allProductsSlice.reducer;