import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('@/components/layouts/Layout'));

// Lazy-load the route components
const Home = lazy(() => import('@/components/pages/Home'));
const PortfolioDetail = lazy(() => import('@/components/pages/PortfolioDetail'));

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio-details" element={<PortfolioDetail />} />
            </Route>
            {/* Other routes with Different Layout */}
            <Route element={<Layout header={false} />}>
                {/* <Route path="/service-details" element={<PortfolioDetail />} /> */}
            </Route>

        </Routes>
    );
}

export default AppRoutes;
