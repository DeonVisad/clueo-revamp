import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

function Footer() {
  return (
    <footer className='flex flex-col md:flex-row w-[100%] justify-around items-center md:justify-center md:items-around bg-[#FFDDD2] font-serif'>

      <div className='mt-4 md:mt-2 border-b-2 border-black md:border-none w-[40vw] flex flex-col justify-between'>
        <p className='cursor-pointer'>Our Story</p>
        <p className='cursor-pointer'>Wholesale & Partnerships</p>
        <p className='cursor-pointer'>Help & FAQ</p>
        <p className='cursor-pointer'>Contact Us</p>
        <p className='mb-2'>Affiliate</p>
      </div>

      <div className='mt-2 border-b-2 border-black md:border-none w-[40vw]'>
        <p className='cursor-pointer'>Ingredients</p>
        <p className='cursor-pointer'>Candle Care</p>
        <p className='cursor-pointer'>Blog</p>
        <p className='cursor-pointer'>Refer-a-Friend</p>
        <p className='mb-2 cursor-pointer'>Privacy Notice</p>
      </div>

      <div className='m-4 flex text-2xl'>
        <span className='px-4'><FaFacebookF className='socials' /></span>
        <span className='px-4'><FiInstagram className='socials' /></span>
      </div>
      
      <div className='m-6'>
        <h1 className='text-lg font-semibold'>Stay up to date</h1>
        <p className='signup-subtitle'>Subscribe to stay in the loop on new products and promotions!</p>
        <input className='px-3 py-1' placeholder='your@email.com'/>
        <button href='/' className='m-2 bg-black text-white px-3 py-1 hover:bg-white hover:text-black'>SIGN UP</button>  
      </div>

    </footer>
  )
}

export default Footer