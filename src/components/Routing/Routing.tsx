import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Facebook } from 'react-content-loader'
import { PageLoader } from '../PageLoader/PageLoader'

import MainLayout from '../../pages/layout'

const Home = lazy(() => import('../../pages/Home'))
const CoinDetailsPage = lazy(() => import('../../pages/CoinDetailsPage'))


const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    {/* index keyword is used within a parent <Route> to indicate that it is the default  */}

                    <Route index element={

                        <Suspense fallback={<Facebook />}>
                            <Home />
                        </Suspense>
                    } />


                    <Route path="/details/:coinId" element={
                        <Suspense fallback={<PageLoader />}>
                            <CoinDetailsPage />
                        </Suspense>
                    } />


                </Route>


            </Routes>
        </>
    )
}

export default Routing
