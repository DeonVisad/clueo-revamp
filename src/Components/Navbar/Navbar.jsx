import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import clueo from '../../Assets/CLUEO HUGE.png';
import {RxHamburgerMenu} from 'react-icons/rx';
import {BsPerson} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
    }

  return (
    <nav className='flex h-20 justify-between items-center bg-white'>
            {/* DESKTOP NAVIGATION */}
            <div className='flex items-center justify-between w-full m-2'>
                <Link to='/'><img src={clueo} className='w-20 h-20'/></Link>
                <ul className='mx-3 hidden md:flex cursor-pointer'>
                    <li className='px-2'>Shop</li>
                    <li className='px-2'>Our Story</li>
                    <li className='px-2'>Contact</li>
                </ul>
                <div className='hidden md:flex'>
                <ul className='flex'>
                    <li className='px-2 text-2xl'><BsPerson /></li>
                    <li className='px-2 text-2xl'><AiOutlineShoppingCart /></li>
                </ul>
            </div>
            </div>

            


            {/* MOBILE NAVIGATION */}
            <div className='flex m-2'>
                    <span className='md:hidden cursor-pointer' onClick={toggleOpen}>{!open ? <RxHamburgerMenu /> : <span>X</span>}</span>
                    
            </div>
            <ul className={!open ? 'hidden' : 'absolute top-0 left-0 w-full h-screen text-white bg-[#540b0e] flex flex-col justify-center items-center'}>
                <li className='p-2 text-3xl cursor-pointer'>Shop</li>
                <li className='p-2 text-3xl cursor-pointer'>Our Story</li>
                <li className='p-2 text-3xl cursor-pointer'>Contact</li>
                <li onClick={toggleOpen} className='absolute top-0 right-0 m-8 font-semibold text-xl cursor-pointer'><span>X</span></li>
            </ul>
                    
        
    </nav>
  )
}

export default Navbar