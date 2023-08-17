import React from 'react';
// import productItems from './ProductsDATA';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts } from '../../Redux/Features/allProductsSlice';
import { addToCart } from '../../Redux/Features/addToCartSlice.js';

function Products() {
    const productItems = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
  
    
  return (
    <div className='flex flex-col'>
      <div className='bg-slate-300'>
        <h1 className='text-3xl m-10 '>SHOP ALL</h1>
      </div>
      <div className='flex flex-wrap justify-center m-20'>
        {productItems.map(product => {
          return (
            <div className='m-5'>
              <img className='w-60 h-auto' src={require('../../Assets/' + product.image + '.jpg')} alt={product.title} />
              <h3 className='font-bold'>{product.title}</h3>
              <p>{product.ingredients}</p>
              <p className='font-semibold text-[#540b0e]'><span className='line-through font-normal text-black mx-2'>$30</span>${product.price}</p>
              <button key={product.id} id='product-btn' className='font-semibold border-2 border-black px-4 hover:bg-[#540b0e]' onClick={() => dispatch(addToCart(product))} >ADD TO CART</button>
              
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Products