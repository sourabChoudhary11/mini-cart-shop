import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const [navClose, setNavClose] = useState({});
  const { cartItemsQuantity } = useSelector(state => state.firstreducer);
  
  const closedDownNavbar = ()=>{
    let navButton = document.getElementsByClassName('navbar-toggler')[0];
    let navbarSupportedContent = document.getElementById('navbarSupportedContent');
    let areaNavButton = navButton.ariaExpanded;
    setNavClose([navButton.classList.add('collapsed'), areaNavButton="false"], (function(){
      setTimeout(()=>{navbarSupportedContent.classList.remove('show')},1)

      setTimeout(()=>{navbarSupportedContent.classList.remove('collapse')},1)
      
      setTimeout(()=>{navbarSupportedContent.classList.add('collapsing')},2)
      setTimeout(()=>{navbarSupportedContent.classList.remove('collapsing')},1000)
      setTimeout(()=>{navbarSupportedContent.classList.add('collapse')},1000)
  
    })(),);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

      <div className="container-fluid">

        <div className="navbar-brand" to="/">MiniCartShop</div>

        <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='false' aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/mini-cart-shop " onClick={() => { closedDownNavbar() }}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/mini-cart-shop/womensFashion" onClick={()=>{closedDownNavbar()}}>Women Fashion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/mini-cart-shop/mensFashion" onClick={()=>{closedDownNavbar()}}>Men Fashion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/mini-cart-shop/home-decoration&furniture" onClick={()=>{closedDownNavbar()}}>Home-Decoration & Furniture</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/mini-cart-shop/sunglasses" onClick={()=>{closedDownNavbar()}}>Sunglasses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/mini-cart-shop/fragrances&skincare" onClick={()=>{closedDownNavbar()}}>Fragrances & Skincare</Link>
            </li>
          </ul>
          <div>
            <Link to={'/mini-cart-shop/cart'} onClick={()=>{closedDownNavbar()}}><AiOutlineShoppingCart color={'orange'} fontSize={25}  />
              <span className='cart-count'>{cartItemsQuantity}</span></Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
