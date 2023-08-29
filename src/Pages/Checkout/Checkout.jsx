import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import CartModal from '../../Components/CartModal/CartModal';
import Footer from '../../Components/Footer/Footer';

const Checkout = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <CartModal />
        <Footer />
    </div>
  )
}

export default Checkout;