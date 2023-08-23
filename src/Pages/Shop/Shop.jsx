import React from 'react'
import InfoBanner from '../../Components/InfoBanner/InfoBanner'
import Navbar from '../../Components/Navbar/Navbar'
import Products from '../../Components/Products/Products'
import Footer from '../../Components/Footer/Footer'

const Shop = () => {
  return (
    <div className='flex flex-col'>
        <InfoBanner />
        <Navbar />
        <Products />
        <Footer />
    </div>
  )
}

export default Shop