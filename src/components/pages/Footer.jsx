import React from 'react';
import two_gears from '../../assets/images/tow_gears.png';
import {NavLink} from 'react-router-dom';

function Footer() {
    return(
        <div className='footer'>
            <img className="two_gears" src={two_gears} alt='Two gears'/>
            <NavLink to='/about'>About this APP</NavLink>
            <NavLink to='/contactUs'>Contact Us</NavLink>
        </div>
    );
}

export default Footer;