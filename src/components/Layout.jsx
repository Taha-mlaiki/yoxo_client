import React from 'react'
import Header from './Header'
import bodyBg from "../assets/Home BG.png"
import { Outlet } from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle"
const Layout = () => {
    return (
        <div className='body'>
            <Header />
            <Outlet />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </div>
    )
}

export default Layout
