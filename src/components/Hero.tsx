import { motion } from 'framer-motion';
import { Map, ChevronDown, Brain } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-6 text-center pt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 max-w-4xl"
            >
                <div className="mb-8 flex justify-center gap-6">
                    <motion.div
                        initial={{ rotate: -10, opacity: 0, x: 20 }}
                        animate={{ rotate: 0, opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="p-5 rounded-2xl bg-slate-800/50 border border-emerald-400/20 backdrop-blur-sm shadow-lg"
                    >
                        <Brain className="w-12 h-12 text-emerald-400" />
                    </motion.div>
                    <motion.div
                        initial={{ rotate: 10, opacity: 0, x: -20 }}
                        animate={{ rotate: 0, opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="p-5 rounded-2xl bg-slate-800/50 border border-sky-400/20 backdrop-blur-sm shadow-lg"
                    >
                        <Map className="w-12 h-12 text-sky-400" />
                    </motion.div>
                </div>

                <h1
                    className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent animate-gradient"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #663399 0%, #d4ab7cc5 50%, #663399 100%)',
                        backgroundSize: '300%'
                    }}
                >
                    Michal Klopotowski
                </h1>

                <h2 className="text-2xl md:text-3xl text-slate-300 mb-10 font-light tracking-wide font-heading">
                    Data Science & Spatial Data Science
                </h2>

                <p className="max-w-2xl mx-auto text-slate-400 mb-12 text-lg leading-relaxed font-light">
                    Passionate data scientist focused on developing novel, ethical machine learning solutions with real-world impact.
                    Specializing in <span className="text-emerald-400 font-medium">Machine Learning</span>, <span className="text-sky-400 font-medium">Spatial Data Science</span>, and <span className="text-amber-400 font-medium">Cartography</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white hover:text-white rounded-full font-medium transition-all shadow-lg shadow-sky-500/25 text-lg block"
                        >
                            Portfolio
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-slate-200 border border-slate-700 hover:border-slate-600 rounded-full font-medium transition-all text-lg block"
                        >
                            Contact
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hover:text-sky-400 transition-colors cursor-pointer"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.a>
        </section>
    );
};

export default Hero;
