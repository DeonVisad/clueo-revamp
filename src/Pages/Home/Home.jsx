import React from 'react';
import { Link } from 'react-router-dom';


import './Home.css';
import InfoBanner from '../../Components/InfoBanner/InfoBanner';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <main className='background h-screen overflow-y-hidden flex-col'>
        <InfoBanner />
        <Navbar />
        <div className='flex flex-col h-full items-center justify-center pb-20'>
            <h1 className='capitalize text-white text-5xl font-semibold font-serif'>Where Clean Ambiance Comes to Light!</h1>
            <Link className='border-2 py-2 px-16 text-center mt-8 text-white hover:bg-[#540b0e]' to='/'><span>SHOP NOW</span></Link>
        </div>
    </main>
  )
}

export default Home