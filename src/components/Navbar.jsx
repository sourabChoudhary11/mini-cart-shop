import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const { cartItemsQuantity } = useSelector(state => state.firstreducer);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

      <div className="container-fluid">

        <div className="navbar-brand" to="/">MiniCartShop</div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/womensFashion">Women Fashion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/mensFashion">Men Fashion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home-decoration&furniture">Home-Decoration & Furniture</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sunglasses">Sunglasses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/fragrances&skincare">Fragrances & Skincare</Link>
            </li>
          </ul>
          <div>
            <Link to={'/cart'}><AiOutlineShoppingCart color={'orange'} fontSize={25} />
              <span className='cart-count'>{cartItemsQuantity}</span></Link>
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
