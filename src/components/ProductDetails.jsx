import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {

  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();

  const ID = useParams().id;

  const { cartItems, quantity } = useSelector(state => state.firstreducer);
  console.log(cartItems)

  useEffect(() => {
    async function getData() {
      const fetchedSpecificProduct = await fetch(`https://dummyjson.com/products/${ID}`);
      const specificProductData = await fetchedSpecificProduct.json();
      setProductDetails(specificProductData);
    }
    getData();

  }, [ID])

  // const { title, brand, description, images, id: ID, stock, rating, price, discountPercentage } = productDetails;

  const addToCart = (data) => {
    dispatch({
      type: "addToCart",
      payload: data,
    })
  }

  const increQuantity = ()=>{
    dispatch({
      type:"increQuantity",
    });
  }

  const decreQuantity = ()=>{
    dispatch({
      type:"decreQuantity",
    })
  }


  return (
    <div>
      {
        productDetails &&
        <div className='product-detail' >

          {/* Image Component */}
          <div className='first-div'>
            <img src={productDetails.images[1] ? productDetails.images[1] : productDetails.images[0]} alt={productDetails.title} />
          </div>

          {/* Product Details Component */}
          <div className='second-div'>

            {/* Badge Component */}
            <div>
              <span className="badge badge-dark">{productDetails.brand}</span>
            </div>

            {/* Product Title and Price */}
            <h2>{productDetails.title} {' '}
              <span className='price-box'>From {' '}
                <span style={{ fontSize: '70%', fontWeight: '900' }}>
                  $
                  <span className='text-strike' style={{ fontWeight: 'lighter' }}>
                    {productDetails.price} {' '}
                  </span>

                  <span className="badge badge-dark">{productDetails.discountPercentage} %</span> {' '}
                  <span className='fw-lighter'> ${Math.round(productDetails.price - (productDetails.price / productDetails.discountPercentage))}</span>

                </span>
              </span>
            </h2>

            <p>{productDetails.description}</p>
            <p>Rating <AiFillStar color='darkYellow' />{productDetails.rating}</p>
            <p></p>

              <h6>Stock left <span className='fw-lighter'>{cartItems.length>0?(
                cartItems.findIndex(i => i.id === Number.parseInt(ID)) === -1 ? productDetails.stock :cartItems.find(i => i.id === Number.parseInt(ID)).stock
                ):productDetails.stock}</span></h6>

            <div className='my-3'>
              <button className='btn badge-dark py-1' onClick={()=>{decreQuantity()}}>-</button>
              <span className='mx-2'>{quantity}</span>
                <button className='btn badge-dark py-1' onClick={() =>{ increQuantity()}}>+</button>
            </div>

            <div>
              <button className='btn btn-success rounded-0' onClick={() => { addToCart(productDetails) }}>Add To Shopping Bag</button>
            </div>
          </div>

        </div >

      }
    </div>
  )
}

export default ProductDetails