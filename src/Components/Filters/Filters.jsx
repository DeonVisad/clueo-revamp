import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts, sortProducts, popularProducts, saleProducts } from '../../Redux/Features/allProductsSlice';

const Filters = () => {
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    const dispatch = useDispatch();

  return (
    <div className=''>
        <span className='bg-gray-800 text-white py-2 px-3 rounded-full cursor-pointer hover:bg-gray-600' onClick={toggleDropdown}>Filters ></span>
        <ul className={!dropdown ? 'hidden' : 'absolute z-20 rounded-lg bg-gray-800 text-white md:text-lg md:text-center text-xs text-start w-[25vw] ml-1 mt-3 p-2'}>
           <li className='cursor-pointer hover:text-gray-300' onClick={() => dispatch(popularProducts())}>Popular</li> 
           <li className='cursor-pointer hover:text-gray-300' onClick={() => dispatch(sortProducts())}>Sort (A to Z)</li>
           <li className='cursor-pointer hover:text-gray-300' onClick={() => dispatch(saleProducts())}>On sale</li>  
        </ul>
    </div>
  )
}

export default Filters