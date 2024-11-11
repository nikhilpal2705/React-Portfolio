import { Route, Routes } from 'react-router-dom';
import Layout from "@/components/layouts/Layout";
import PortfolioDetail from '@/components/pages/PortfolioDetail';
import Home from '@/components/pages/Home';

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
