import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Resume from '@/components/home/Resume';
import Portfolio from '@/components/home/Portfolio';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';
import Skills from "@/components/home/Skills";
import CodingProfiles from '@/components/home/CodingProfiles';

function Home() {
    return (
        <main className="main">
            <Hero />
            <About />
            <Skills />
            <CodingProfiles/>
            <Resume />
            <Portfolio />
            <Services />
            <Contact />
        </main>
    );
}

export default Home