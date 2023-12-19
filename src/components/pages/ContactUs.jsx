import React from 'react';
import { NavLink } from 'react-router-dom';
import under_con from '../../assets/images/undreCon.png';

function ContactUs() {
    return (
        <div className='container'>
            <h1 className='title'>Contact Us</h1>
            <a href='https://github.com/rositsadr/ProjectTrackerApp'>Git InIt</a>
            <NavLink className="homeLink" to="/">Back to Home Page</NavLink>
            <img src={under_con} alt='under construction'/>
        </div>
    );
}

export default ContactUs;