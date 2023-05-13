import React, {useState, useEffect} from 'react'
import Product from '../ProductContainer';

const MensFashion = () => {

    const [mensFashion, setMensFashion] = useState([]);

    useEffect(() => {
        async function getData() {

            let fetchedMensShirtsData = await fetch('https://dummyjson.com/products/category/mens-shirts');
            let mensShirtData = await fetchedMensShirtsData.json();
            const { products } = mensShirtData;

            let fetchedMensShoesData = await fetch('https://dummyjson.com/products/category/mens-shoes');
            let mensShoesData = await fetchedMensShoesData.json();
            const { products: mensShoesProducts } = mensShoesData;

            let fetchedMensWatchesData = await fetch('https://dummyjson.com/products/category/mens-watches');
            let mensWatchesData = await fetchedMensWatchesData.json();
            const { products: mensWatchesProducts } = mensWatchesData;

            setMensFashion([...products, ...mensShoesProducts, ...mensWatchesProducts]);
        }
        getData();
    }, [])

  return (
      <div className='product-container'>
          {
              mensFashion.map((product) => (
                  <Product key={product.id} product={product} />
              ))
          }
      </div>
  )
}

export default MensFashion
