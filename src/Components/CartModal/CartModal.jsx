import {React, useEffect} from 'react';
import { addToCart, removeFromCart, decreaseCartQuantity, increaseCartQuantity, getTotals } from '../../Redux/Features/addToCartSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer.jsx';

function CartModal({openModal, onClose}) {
  
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  



    

  return (
    <div className='flex flex-col overflow-x-hidden '>
        <div className='flex items-center m-2'>
          <h3 className='text-xl font-serif m-2'>My Bag</h3>
          <p className='text-sm font-semibold text-[#540b0e] m-2'>{cart.cartItems.length} items</p>
        </div>
        <div className='bg-[#335c67] h-28 flex flex-col justify-center items-center'>
            <h2 className='font-semibold font-serif text-white'>Add a Gift?</h2>
            <Link to='/shopall'><span className='bg-[#fff3b0] rounded-full py-1 px-4 font-bold'>Shop now </span></Link>
        </div>
        <div>
          
        </div>
        
         {cart.cartItems.length === 0 && (
          <div className='cart-items-empty'>No items are added.</div>
        )}
        <div className='md:flex md:justify-center md:items-center'>
          <div className='flex flex-col  items-center my-4'>
            {cart.cartItems.map((item) => (
              <div key={item.id} className='flex w-full items-center justify-around md:items-start md:justify-between md:border-b-[1px] md:border-black p-2 m-4 '>
                <div className='flex flex-row justify-around'>
                  <img className='w-[100px] h-auto' src={require('../../Assets/' + item.image + '.jpg')} alt={item.title}/>
                </div>
                
                <div className='flex flex-col'>
                  <h6 className=''>{item.title}</h6>
                  <div className='py-2'>
                    <button key={item.id} className='bg-black text-white rounded-sm px-2 mx-2' onClick={() => dispatch(decreaseCartQuantity(item))}>-</button>
                    <span className='font-semibold'>{item.quantity}</span>
                    <button key={item.id} className='bg-black text-white rounded-sm px-2 mx-2' onClick={() => dispatch(increaseCartQuantity(item))}>+</button>
                  </div>
                    <h6 className='item-total'>Total: ${(item.quantity * item.price).toFixed(2)}</h6>
                </div>

                <span className='hidden' key={item.id} onClick={() => dispatch(removeFromCart(item))}>Remove</span>
                <span className='mx-3 cursor-pointer' key={item.id} onClick={() => dispatch(removeFromCart(item))}>X</span>

              </div>
            ))}
          </div>
          <div className='flex flex-col border-t-[1px] border-black md:border-none md:w-[30%]  md:items-center md:justify-center'>
            <h3 className='font-semibold'>Subtotal: ${cart.cartTotalAmount}</h3>
            <button className='bg-black md:bg-[#540b0e] text-white font-bold px-3 py-2 md:drop-shadow-md'>Proceed To Checkout</button>
            <p className='text-xs mt-2'>Shipping & taxes calculated at checkout</p>
            <Link to='/shopall'><span className='font-semibold cursor-pointer'>Continue shopping</span></Link>
          </div>
          
        </div>
    </div>
  )
}

export default CartModal;