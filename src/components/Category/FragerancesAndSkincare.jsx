import React, {useEffect, useState} from 'react'
import Product from '../ProductContainer';

const FragrancesAndSkincare = () => {

    const [fragrancesAndSkincare, setFragrancesAndSkincare] = useState([]);

    useEffect(() => {
        async function getData() {

            let fetchedFragrancesData = await fetch('https://dummyjson.com/products/category/fragrances');
            let fragranceData = await fetchedFragrancesData.json();
            const { products } = fragranceData;

            let fetchedSkincareData = await fetch('https://dummyjson.com/products/category/skincare');
            let skincareData = await fetchedSkincareData.json();
            const { products: skincareProducts } = skincareData;

            setFragrancesAndSkincare([...products, ...skincareProducts]);
        }
        getData();
    }, [])

    return (
        <div className='product-container'>
            {
                fragrancesAndSkincare.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}



export default FragrancesAndSkincare
