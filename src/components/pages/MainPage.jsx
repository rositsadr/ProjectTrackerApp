import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../atoms/Footer'

function MainPage() {
    return (
        <div>
            <h1 className="title">Poject Tracker</h1>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainPage