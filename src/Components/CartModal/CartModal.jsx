import {React, useEffect} from 'react';
import { addToCart, removeFromCart, decreaseCartQuantity, increaseCartQuantity, getTotals } from '../../Redux/Features/addToCartSlice.js';
import { useSelector, useDispatch } from 'react-redux';

function CartModal({openModal, onClose}) {
  
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  



    

  return (
    <div className=' flex flex-col h-full '>
      <div className=''>
        <div className='flex items-start w-full border-b-2 border-black'>
          <h3 className='text-2xl font-serif m-4'>Shopping Bag</h3>
        </div>
        <div>
          
        </div>
        
         {cart.cartItems.length === 0 && (
          <div className='cart-items-empty'>No items are added.</div>
        )}
          <div className='flex flex-col h-full w-full items-center'>
            {cart.cartItems.map((item) => (
              <div key={item.id} className='flex'>
                <img className='w-[5vw] h-auto' src={require('../../Assets/' + item.image + '.jpg')} alt={item.title}/>
                <h6 className='cart-item-title'>{item.title}</h6>
                <h6 className='cart-item-title'>${item.price} x {item.quantity}</h6>
                <div className='quantity-container'>
                  <button key={item.id} className='amount-btn' onClick={() => dispatch(decreaseCartQuantity(item))}>-</button>
                  <span>{item.quantity}</span>
                  <button key={item.id} className='amount-btn' onClick={() => dispatch(increaseCartQuantity(item))}>+</button>
                </div>
                <h6 className='item-total'>Total: ${(item.quantity * item.price).toFixed(2)}</h6>
                <span className='remove-item' key={item.id} onClick={() => dispatch(removeFromCart(item))}>Remove</span>

              </div>
            ))}
          </div>
          <div className='bottom-modal-context'>
            <h3>Subtotal: ${cart.cartTotalAmount}</h3>
            <button className='checkout-btn'>CHECKOUT</button>
            <span className='cont-shopping' onClick={() => onClose()}>continue shopping</span>
          </div>
      </div>
    </div>
  )
}

export default CartModal;