import React from 'react'

const InfoBanner = () => {
  return (
    <div className='bg-[#540b0e] h-6 flex sticky w-full'>
        <ul className='flex w-full justify-between items-center mx-3 text-white font-semibold'>
            <li className='hidden md:flex'><p>Free Shipping Today</p></li>
            <li><p>Limited Time Offer</p></li>
            <li><p>Free Shipping Today</p></li>
        </ul>
    </div>
  )
}

export default InfoBanner