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
          <Route path='/' element={<Home />} />
          <Route path='/sunglasses' element={<Sunglasses />} />
          <Route path='/home-decoration&furniture' element={<HomeDecorationAndFurniture />} />
          <Route path='/fragrances&skincare' element={<FragrancesAndSkincare />} />
          <Route path='/womensFashion' element={<WomenFashion />} />
          <Route path='/mensFashion' element={<MensFashion />} />
          <Route path='/product-detail/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
