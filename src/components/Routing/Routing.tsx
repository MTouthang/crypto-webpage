import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../pages/Home'
import CoinDetailsPage from '../../pages/CoinDetailsPage'
import MainLayout from '../../pages/layout'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    {/* index keyword is used within a parent <Route> to indicate that it is the default  */}
                    <Route index element={<Home />} />
                    <Route path="/details/:coinId" element={<CoinDetailsPage />} />
                </Route>


            </Routes>
        </>
    )
}

export default Routing
