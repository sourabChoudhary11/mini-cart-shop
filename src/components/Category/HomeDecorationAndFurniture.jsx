import React, {useState, useEffect} from 'react'
import Product from '../ProductContainer';

const HomeDecorationAndFurniture = () => {
  const [homeDecorationAndFurniture, setHomeDecorationAndFurniture] = useState([]);

  useEffect(() => {
    async function getData() {

      let fetchedHomeDecorationData = await fetch('https://dummyjson.com/products/category/home-decoration');
      let homeDecorationData = await fetchedHomeDecorationData.json();
      const { products } = homeDecorationData;

      let fetchedFurnitureData = await fetch('https://dummyjson.com/products/category/furniture');
      let furnitureData = await fetchedFurnitureData.json();
      const { products: furnitureProducts } = furnitureData;

      setHomeDecorationAndFurniture([...products, ...furnitureProducts]);
    }
    getData();
  }, [])

  return (
    <div className='product-container'>
      {
        homeDecorationAndFurniture.map((product) => (
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default HomeDecorationAndFurniture
