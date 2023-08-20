import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
// import productItems from './ProductsDATA';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts, sortProducts } from '../../Redux/Features/allProductsSlice';
import { addToCart } from '../../Redux/Features/addToCartSlice.js';
import './Products.css';

import {FaStar} from 'react-icons/fa'
import Filters from '../Filters/Filters';

function Products() {
    const productItems = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(allProducts())
    }, [productItems, dispatch])

    
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-center items-center background-banner h-[60vh]'>
        <h1 className='text-3xl font-bold text-white m-10 '>SHOP ALL</h1>
        {/* <h2 className='text-white' onClick={() => dispatch(sortProducts())}>Sort</h2> */}
      </div>
      <div className='flex p-5'>
        <Filters />
      </div>
      <div className='flex flex-wrap justify-center m-10'>
        {productItems.map(product => {
          return (
            <div key={product.id} className='flex flex-col justify-center items-center m-5 w-60 '>
              <div className='container'>        
                {product.sale === true ? (<p className='flex absolute mt-4 px-4 text-white text-center bg-[#540b0e]'>SALE</p>) : null}
                <Link key={product.id} to={`/${product.id}`}><img className='w-60 h-auto object-fit flex' src={require('../../Assets/' + product.image + '.jpg')} alt={product.title} /></Link>
              </div>
              <div className='flex w-full justify-around items-center text-center'>
                <h3 className='font-bold'>{product.title}</h3>
                <span className='flex text-xs text-[#540b0e]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
              </div>
              <p className='my-1 text-center text-wrap text-sm h-30'>{product.ingredients}</p>
              <div className='flex w-full justify-between mb-2'>
                <button key={product.id} id='product-btn' className='font-semibold border-2 border-black text-xs mr-2 px-2 hover:bg-[#540b0e]' onClick={() => dispatch(addToCart(product))} >ADD TO CART</button>
                {product.sale === true ? (<p className='font-semibold text-[#540b0e]'>${product.price - (product.price * .20).toFixed(2)}</p>) : (<p className='font-semibold flex'>${product.price}</p>)}
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Products