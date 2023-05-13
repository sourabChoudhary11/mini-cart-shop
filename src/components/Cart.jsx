import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';


const Cart = () => {

  const {cartItems} = useSelector(state=>state.firstreducer);

  return (
    <div className='cart'>
      {
        cartItems.map((i)=>(
          <CartItem key={i.id} product={i}/>
        ))
      }
    </div>
  )
}

export default Cart
