import React from 'react';
import { NavLink } from 'react-router-dom';
import under_con from '../../assets/images/undreCon.png';

function AboutApp() {
    return (
        <div className='container'>
            <h1 className='title'>About the App</h1>
            <p></p>
            <NavLink style={{marginBottom:"0"}} className="homeLink" to="/">Back to Home Page</NavLink>
            <img src={under_con} alt='under construction'/>
        </div>
    );
}

export default AboutApp;