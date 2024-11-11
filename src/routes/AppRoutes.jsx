import { Route, Routes } from 'react-router-dom';

import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Resume from '@/components/home/Resume';
import Portfolio from '@/components/home/Portfolio';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';
import Skills from "@/components/home/Skills";
import Layout from "@/components/layouts/Layout";
import PortfolioDetail from '@/components/pages/PortfolioDetail';

function MainPage() {
    return (
        <Layout>
            <main className="main">
                <Hero />
                <About />
                <Skills />
                <Resume />
                <Portfolio />
                <Services />
                <Contact />
            </main>
        </Layout>
    );
}

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/portfolio-details" element={<Layout header={true}><PortfolioDetail /></Layout>} />
            {/* <Route path="/service-details" element={<Layout header={false}><PortfolioDetail /></Layout>} /> */}
            {/* <Route path="/starter-page" element={<Layout header={false}><PortfolioDetail /></Layout>} /> */}

        </Routes>
    );
}

export default AppRoutes;
