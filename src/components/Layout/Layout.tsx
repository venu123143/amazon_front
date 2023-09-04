// import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer'
import { Outlet } from "react-router-dom"
// import { useSelector } from 'react-redux'
// import { useState, useEffect } from "react"
// import { useSelector } from 'react-redux'

const Layout = () => {
    // const { screen } = useSelector((state: any) => state.functions)
    
    return (
        <div className={``}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout