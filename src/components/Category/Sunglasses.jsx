import React, { useState, useEffect } from 'react'
import Product from '../ProductContainer';

const Sunglasses = () => {

    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        async function getData() {
            let fetchedSmartPhonesData = await fetch('https://dummyjson.com/products/category/sunglasses');
            let smartPhoneData = await fetchedSmartPhonesData.json();
            const { products } = smartPhoneData;
            setSunglasses([...products]);
        }
        getData();
    }, [])

  return (
      <div className='product-container'>
        {
            sunglasses.map((product)=>(
                <Product key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default Sunglasses
