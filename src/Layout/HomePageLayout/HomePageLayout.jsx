import React from 'react'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import { Outlet } from 'react-router'

const HomePageLayout = () => {
    return (
        <div>
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}

export default HomePageLayout