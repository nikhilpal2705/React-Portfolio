import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('@/components/layouts/Layout'));

// Lazy-load the route components
const Home = lazy(() => import('@/components/pages/Home'));
const ProjectDetails = lazy(() => import('@/components/pages/ProjectDetails'));

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/project-details" element={<ProjectDetails />} />
            </Route>
            {/* Other routes with Different Layout */}
            <Route element={<Layout header={false} />}>
                {/* <Route path="/service-details" element={<ProjectDetails />} /> */}
            </Route>

        </Routes>
    );
}

export default AppRoutes;
