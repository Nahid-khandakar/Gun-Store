import React from 'react';
import './Card.css'
import { BsCartDashFill } from 'react-icons/bs';

const Card = (props) => {
    const { name, img, bullet, capacity, price, action } = props.gun
    //console.log(props)

    return (
        <div className='card'>

            <div>
                <img className='image-container' src={img} alt="" />
            </div>

            <div className='gun-info'>
                <h1>{name}</h1>
                <p>Bullet Type : {bullet}</p>
                <p>Capacity : {capacity}</p>
                <p>Action : {action}</p>
            </div>

            <div className='add-to-cart'>
                <button onClick={() => props.handelAddToCart(props.gun)} > <BsCartDashFill className='icon' /> </button>
                <h1>$ {price}</h1>
            </div>


        </div>
    );
};

export default Card;