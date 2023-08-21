import React from 'react';
import { allProducts } from '../../Redux/Features/allProductsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import InfoBanner from '../InfoBanner/InfoBanner';
import Navbar from '../Navbar/Navbar';
import Filters from '../Filters/Filters';
import { addToCart } from '../../Redux/Features/addToCartSlice';


const ProductPage = () => {
    const productItems = useSelector((state) => state.allProducts.products);
    const {productId} = useParams();
    const dispatch = useDispatch();

    const thisProduct = productItems.find(prod => prod.id === productId)

  return (
    <div className='flex flex-col h-screen'>
      <InfoBanner />
      <Navbar />
      <div className='w-full'>
        <div className='flex justify-center items-center background-banner h-[20vh]'></div>
        <div className='flex p-5 text-xs md:text-lg'>
          <span>/ </span><Link to='/shopall'><p> Shop</p></Link>
        </div>
        <div className='md:w-full md:h-full md:flex md:justify-center md:items-center'>
          <div className='w-full md:w-[50%] flex items-center justify-center md:justify-around'>
            <img className='w-80 md:w-[20vw] h-auto object-fit ' src={require('../../Assets/' + thisProduct.image + '.jpg')} alt={thisProduct.title} />
          </div>
          <div className='flex flex-col items-start m-4 md:w-[50%]'>
            <h4 className='my-1 font-sanserif uppercase text-sm'>Scented Candle</h4>
            <h2 className='text-3xl font-serif'>{thisProduct.title}</h2>
            {thisProduct.sale === true ? (<h3 className='font-semibold text-[#540b0e] my-2'>${thisProduct.price - (thisProduct.price * .20).toFixed(2)}</h3>) : (<h3 className='font-semibold flex'>${thisProduct.price}</h3>)}
            <p className='text-start my-6 md:w-[30vw]'>{thisProduct.ingredients}</p>
            <button className='bg-black text-white w-full md:w-[25%] py-4' onClick={() => dispatch(addToCart())}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage