import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();

    const { title, price, id, images, quantity, discountPercentage } = product;
    const decreProductQuantity = (id)=>{
        dispatch({
            type:"decreProductQuantity",
            payload:id,
        })
    }
    const increProductQuantity = (id)=>{
        dispatch({
            type:"increProductQuantity",
            payload:id,
        })
    }

    const deleteProductFromCart = (id)=>{
        dispatch({
            type:"deleteProductFromCart",
            payload:id,
        })
    }

    return (

        <div className='cart-item'>

            <div className='first-div'>
                <img src={images[1] ? images[1] : images[0]} alt={title} />
            </div>

            <div className='second-div'>
                <h4>{title}</h4>
                <h6>${Math.round(price - (price / discountPercentage))}</h6>
                <div>
                    <button className='btn btn-dark py-1 me-2' onClick={()=>{decreProductQuantity(id)}}>-</button>
                    {quantity}
                    <button className='btn btn-dark py-1 mx-2' onClick={() => { increProductQuantity(id)}}>+</button>
                    <button className='btn btn-dark py-1 mx-1' onClick={()=>{deleteProductFromCart(id)}}><AiFillDelete /></button>
                </div>
            </div>

        </div>

    )
}

export default CartItem
