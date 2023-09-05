import React, {useEffect} from 'react';
import { allProducts } from '../../Redux/Features/allProductsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import InfoBanner from '../InfoBanner/InfoBanner';
import Navbar from '../Navbar/Navbar';
import Filters from '../Filters/Filters';
import { addToCart } from '../../Redux/Features/addToCartSlice';
import Footer from '../Footer/Footer';


const ProductPage = () => {
    const productItems = useSelector((state) => state.allProducts.products);
    const {productId} = useParams();
    const dispatch = useDispatch();

    const thisProduct = productItems.find(prod => prod.id === productId)
    useEffect(() => {
      dispatch(allProducts())
    }, [productItems, dispatch])

  return (
    <div className='flex flex-col h-[100vh]'>
      <InfoBanner />
      <Navbar />
      
        <div className='flex justify-center items-center background-banner h-[50vh]'></div>
        <div className='flex p-5 text-xs md:text-lg'>
          <span>/ </span><Link to='/shopall'><p> Shop</p></Link>
        </div>
        <div className='md:w-full md:h-full md:flex md:justify-center md:items-center'>
          {productItems.map(product => {
            if(product.id === thisProduct.id)
            return(
              <div>
                <div className='w-full md:w-[50%] flex items-center justify-center md:justify-around'>
                  <img className='w-80 md:w-[20vw] h-auto object-fit ' src={require('../../Assets/' + product.image + '.jpg')} alt={product.title} />
                </div>
                <div className='flex flex-col items-start m-4 md:w-[50%]'>
                  <h4 className='my-1 font-sanserif uppercase text-sm'>Scented Candle</h4>
                  <h2 className='text-3xl font-serif'>{product.title}</h2>
                  {product.sale === true ? (<h3 className='font-semibold text-[#540b0e] my-2'>${product.price - (product.price * .20).toFixed(2)}</h3>) : (<h3 className='font-semibold flex'>${product.price}</h3>)}
                  <p className='text-start my-6 md:w-[30vw]'>{product.ingredients}</p>
                  <button className='bg-black text-white w-full md:w-[50%] py-4' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                </div>
              </div>
            )
          })}
        </div>
      
      <Footer />
    </div>
  )
}

export default ProductPage