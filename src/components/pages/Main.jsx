import React from 'react'
import Decorations from './Decorations'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Main() {
    return (
        <div>
            <Decorations/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main