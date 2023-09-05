import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact