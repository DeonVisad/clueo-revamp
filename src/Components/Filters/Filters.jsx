import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Filters = () => {
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

  return (
    <div className=''>
        <span className='bg-gray-800 text-white py-2 px-3 rounded-full cursor-pointer hover:bg-gray-600' onClick={toggleDropdown}>Filters ></span>
        <ul className={!dropdown ? 'hidden' : 'absolute z-20 rounded-lg bg-gray-800 text-white md:text-lg md:text-center text-xs text-start w-[25vw] ml-1 mt-3 p-2'}>
           <li className='cursor-pointer hover:text-gray-300'>Popular</li>
           <li className='cursor-pointer hover:text-gray-300'>Best Sellers</li> 
           <li className='cursor-pointer hover:text-gray-300'>New</li> 
           <li className='cursor-pointer hover:text-gray-300'>Sort (A to Z)</li>
           <li className='cursor-pointer hover:text-gray-300'>Price (Low to High)</li>  
        </ul>
    </div>
  )
}

export default Filters