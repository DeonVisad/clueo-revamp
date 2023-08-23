import {React, useEffect} from 'react';
import { addToCart, removeFromCart, decreaseCartQuantity, increaseCartQuantity, getTotals } from '../../Redux/Features/addToCartSlice.js';
import { useSelector, useDispatch } from 'react-redux';

function CartModal({openModal, onClose}) {
  
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  


  if(!openModal) return null;

    

  return (
    <div className='w-[100%] h-[100%] bg-black/50'>
      <div className='cartModal-container'>
        <h3>My Cart</h3>
        
         {cart.cartItems.length === 0 && (
          <div className='cart-items-empty'>No items are added.</div>
        )}
          <div className='cart-items-container'>
            {cart.cartItems.map((item) => (
              <div key={item.id} className='cart-items-row'>
                <img className='cart-list-image' src={require('../../Assets/' + item.image + '.jpg')} alt={item.title}/>
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

export default CartModal