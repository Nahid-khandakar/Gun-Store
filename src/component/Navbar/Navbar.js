import React from 'react';
import './Navbar.css'
import { BsCartDashFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Samsu Store</h1>

            <div className='cart-counter'>

                <BsCartDashFill className='icon' color='#fff' />
            </div>
        </div>
    );
};

export default Navbar;