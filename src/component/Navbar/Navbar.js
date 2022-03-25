import React from 'react';
import './Navbar.css'
import { BsCartDashFill } from 'react-icons/bs';

const Navbar = (props) => {
    //console.log(props)
    return (
        <div className='navbar'>
            <h1>Gun Store</h1>

            <div className='cart-counter' onClick={props.openModal}>
                <span>{props.cart.length}</span>
                <BsCartDashFill className='icon' color='#fff' />
            </div>
        </div>
    );
};

export default Navbar;