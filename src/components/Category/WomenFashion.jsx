import React, {useState, useEffect} from 'react'
import Product from '../ProductContainer';

const WomenFashion = () => {
    const [womenFashion, setWomenFashion] = useState([]);

    useEffect(() => {
        async function getData() {

            let fetchedWomensJewelleryData = await fetch('https://dummyjson.com/products/category/womens-jewellery');
            let womensJewelleryData = await fetchedWomensJewelleryData.json();
            const { products } = womensJewelleryData;

            let fetchedWomensBagsData = await fetch('https://dummyjson.com/products/category/womens-bags');
            let womensBagsData = await fetchedWomensBagsData.json();
            const { products: womensBagsProducts } = womensBagsData;

            let fetchedWomensWatchesData = await fetch('https://dummyjson.com/products/category/womens-watches');
            let womensWatchesData = await fetchedWomensWatchesData.json();
            const { products: womensWatchesProducts } = womensWatchesData;

            setWomenFashion([...products, ...womensBagsProducts, ...womensWatchesProducts]);
        }
        getData();
    }, [])

    return (
        <div className='product-container'>
            {
                womenFashion.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default WomenFashion
