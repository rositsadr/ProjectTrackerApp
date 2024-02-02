import React from 'react'
import Decorations from './Decorations'
import { Outlet } from 'react-router-dom'
import Footer from '../organism/Footer'

function Main() {
    return (
        <div>
            <h1 className="title">Poject Tracker</h1>
            <Decorations/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main