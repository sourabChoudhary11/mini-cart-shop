import { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FragrancesAndSkincare from './components/Category/FragerancesAndSkincare';
import WomenFashion from './components/Category/WomenFashion';
import MensFashion from './components/Category/MensFashion';
import Sunglasses from './components/Category/Sunglasses';
import HomeDecorationAndFurniture from './components/Category/HomeDecorationAndFurniture';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import AddToCartPopUp from './components/AddToCartPopUp';

function App() {

  const { pop } = useSelector(state => state.firstreducer)

  const dispatch = useDispatch();


  useEffect(() => {
    setTimeout(() => {
      if (pop) {
        dispatch({
          type: "popUpRemoval",
          payload:false
        })
      }
    }, 1500)
  }, [pop,dispatch])

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        {
          pop && (<AddToCartPopUp />)
        }
        <Routes>
          <Route path='/mini-cart-shop' element={<Home />} />
          <Route path='/mini-cart-shop/sunglasses' element={<Sunglasses />} />
          <Route path='/mini-cart-shop/home-decoration&furniture' element={<HomeDecorationAndFurniture />} />
          <Route path='/mini-cart-shop/fragrances&skincare' element={<FragrancesAndSkincare />} />
          <Route path='/mini-cart-shop/womensFashion' element={<WomenFashion />} />
          <Route path='/mini-cart-shop/mensFashion' element={<MensFashion />} />
          <Route path='/mini-cart-shop/product-detail/:id' element={<ProductDetails />} />
          <Route path='/mini-cart-shop/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
