import React, {useState, useEffect} from 'react'
import Product from './ProductContainer'

const Home = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        async function getData(){
            let fetchedData = await fetch('https://dummyjson.com/products');
            let data = await fetchedData.json();
            const {products} = data;
            setAllProducts(products)
        }
        getData();
    }, [])

    return (
        <div className='product-container'>
            {
                allProducts.map((product)=>(
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Home
