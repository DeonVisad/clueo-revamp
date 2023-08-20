import React from 'react';
import { allProducts } from '../../Redux/Features/allProductsSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const ProductPage = () => {
    const productItems = useSelector((state) => state.allProducts.products);
    const {productId} = useParams();

    const thisProduct = productItems.find(prod => prod.id === productId)

  return (
    <div>
      <h1>{thisProduct.title}</h1>
    </div>
  )
}

export default ProductPage