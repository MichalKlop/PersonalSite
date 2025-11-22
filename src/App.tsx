import Navbar from './components/Navbar';
import TopographyBackground from './components/TopographyBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div className="relative min-h-screen text-slate-200 selection:bg-sky-500/30">
            <Navbar />
            <TopographyBackground />

            <main className="relative z-10">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default App;
