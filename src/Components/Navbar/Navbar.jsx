import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import CartModal from '../CartModal/CartModal';

import clueo from '../../Assets/CLUEO HUGE.png';
import {RxHamburgerMenu} from 'react-icons/rx';
import {BsPerson} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Checkout from '../../Pages/Checkout/Checkout';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
    }

  return (
        <nav className='flex h-20 justify-between items-center border-b-2 border-black bg-[#FAF9F6] w-full'>
                
                {/* DESKTOP NAVIGATION */}
                <div className='flex items-center justify-between w-full m-2'>
                    <Link to='/'><img src={clueo} className='w-20 h-20'/></Link>
                    <ul className='mx-3 hidden md:flex cursor-pointer'>
                        <Link to='/shopall'><li className='px-2 font-semibold'>Shop</li></Link>
                        <Link to='/ourstory'><li className='px-2 font-semibold'>Our Story</li></Link>
                        <Link to='/contact'><li className='px-2 font-semibold'>Contact</li></Link>
                    </ul>
                    <div className='hidden md:flex'>
                    <ul className='flex'>
                        <li className='px-2 text-2xl'><BsPerson /></li>
                        <Link to='/checkout'><li className='px-2 text-2xl'><AiOutlineShoppingCart /></li></Link>
                    </ul>
                </div>
                </div>

                


                {/* MOBILE NAVIGATION */}
                <div className='flex m-2 items-center'>
                        <span className='md:hidden mr-4 text-xl cursor-pointer'><Link to='/checkout'><AiOutlineShoppingCart /></Link></span>
                        <span className='md:hidden cursor-pointer text-xl mr-4' onClick={toggleOpen}>{!open ?  <RxHamburgerMenu /> : <span>X</span>}</span>
                        
                </div>
                <ul className={!open ? 'hidden' : 'absolute top-0 left-0 w-full h-screen text-white bg-[#540b0e] flex flex-col justify-center items-center z-30'}>
                    <Link to='/shopall'><li className='p-2 text-3xl cursor-pointer hover:text-black'>Shop</li></Link>
                    <Link to='/ourstory'><li className='p-2 text-3xl cursor-pointer hover:text-black'>Our Story</li></Link>
                    <Link to='/contact'><li className='p-2 text-3xl cursor-pointer hover:text-black'>Contact</li></Link>
                    <li onClick={toggleOpen} className='absolute top-0 right-0 m-8 font-semibold text-xl cursor-pointer'><span>X</span></li>
                </ul>
                        
            
        </nav>
  )
}

export default Navbar