import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, img, bullet, capacity, price, action } = props.gun
    //console.log(props.gun)
    return (
        <div className='card'>
            <img className='image-container' src={img} alt="" />
            <h1>{name}</h1>
            <p>Bullet Type : {bullet}</p>
            <p>Capacity : {capacity}</p>


        </div>
    );
};

export default Card;