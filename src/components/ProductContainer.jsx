import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails';

const Product = ({ product }) => {
  
  const { title, images, price, id, rating } = product;

  return (

    <Link to={`/product-detail/${id}`} className='product' element={<ProductDetails product={product} />}>
        <div>
          <img src={images[1]?images[1]:images[0]} alt={title} />
          <h6>Rating <AiFillStar />{rating.toString().includes('.') ? rating : rating.toString().concat('.0')}</h6>
        </div>

        <h3>{title}</h3>
        <h5>
          From {' '}
          <span style={{ fontSize: '70%', fontWeight: '900' }}>
            $
            <span style={{ fontWeight: 'lighter' }}>
              {price}
            </span>
          </span>
        </h5>
      </Link>
  )
}

export default Product