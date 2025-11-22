import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Code2, Database, Globe2, Cpu, PenTool } from 'lucide-react';

const About = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 className="w-5 h-5 text-sky-400" />,
            skills: ["Python", "C", "R", "SQL", "HTML", "CSS", "JavaScript", "Bash", "x86 Assembly"]
        },
        {
            title: "Libraries & Frameworks",
            icon: <Database className="w-5 h-5 text-emerald-400" />,
            skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "FastAPI"]
        },
        {
            title: "Data Visualization",
            icon: <PenTool className="w-5 h-5 text-amber-400" />,
            skills: ["Matplotlib", "Seaborn", "ggplot2", "Leaflet", "Mapbox", "Adobe Creative Suite"]
        },
        {
            title: "Geospatial",
            icon: <Globe2 className="w-5 h-5 text-indigo-400" />,
            skills: ["ArcGIS", "QGIS", "Agisoft Metashape", "Google Earth Engine", "RTK UAVs"]
        },
        {
            title: "Machine Learning",
            icon: <Brain className="w-5 h-5 text-rose-400" />,
            skills: ["CNNs", "RNNs", "Ensemble Methods", "LSTMs", "Vision Transformers"]
        },
        {
            title: "Tools & Skills",
            icon: <Cpu className="w-5 h-5 text-slate-400" />,
            skills: ["Git", "Unity", "MongoDB", "PostgreSQL", "MySQL", "Project Management"]
        }
    ];

    return (
        <section id="about" className="py-16 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">

                {/* Education Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-100">
                        <GraduationCap className="text-sky-400" /> Education
                    </h3>

                    <div className="space-y-8">
                        <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 hover:border-sky-500/30 transition-all shadow-lg shadow-black/20">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-slate-100">University of Oregon</h4>
                                    <p className="text-slate-400 text-lg">Eugene, Oregon</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-sm border border-emerald-500/20 whitespace-nowrap">
                                    June 2026
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-slate-200 font-medium mb-1">Bachelor of Science</p>
                                    <p className="text-sky-400 font-medium text-lg">Data Science, Spatial Data Science</p>
                                </div>

                                <div>
                                    <p className="text-slate-200 font-medium mb-1">Minors</p>
                                    <p className="text-slate-400">Computer Science, Mathematics</p>
                                </div>

                                <div className="pt-4 border-t border-slate-700/50 flex gap-6 text-sm">
                                    <div>
                                        <span className="text-slate-500 uppercase tracking-wider text-xs block mb-1">GPA</span>
                                        <span className="text-slate-200 font-mono">4.07</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 uppercase tracking-wider text-xs block mb-1">Honors</span>
                                        <span className="text-slate-200">Dean's List (2022-2025)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/20 p-6 rounded-xl border border-slate-700/50">
                            <h4 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-amber-400" /> Awards & Scholarships
                            </h4>
                            <ul className="space-y-3 text-slate-300 text-sm">
                                <li className="flex gap-3 items-start">
                                    <span className="text-amber-400 mt-1">★</span>
                                    <span>
                                        <strong className="text-slate-200 block">Bill Loy Award for Excellence in Cartography</strong>
                                        <span className="text-slate-500">2025</span>
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-amber-400 mt-1">★</span>
                                    <span>
                                        <strong className="text-slate-200 block">BeaverHacks Best Overall Winner</strong>
                                        <span className="text-slate-500">2025</span>
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-amber-400 mt-1">★</span>
                                    <span>
                                        <strong className="text-slate-200 block">Clarence and Lucille Dunbar Scholarship</strong>
                                        <span className="text-slate-500">2024, 2025</span>
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-amber-400 mt-1">★</span>
                                    <span>
                                        <strong className="text-slate-200 block">Minds Move Mountains Scholarship</strong>
                                        <span className="text-slate-500">2022-2026</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-100">
                        <Brain className="text-emerald-400" /> Skills & Tools
                    </h3>

                    <div className="grid gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className="bg-slate-800/40 p-5 rounded-xl border border-slate-700 hover:border-sky-500/30 transition-colors"
                            >
                                <h4 className="text-base font-bold text-slate-200 mb-3 flex items-center gap-2">
                                    {category.icon}
                                    {category.title}
                                </h4>
                                <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-slate-400 leading-relaxed">
                                    {category.skills.map((skill, i) => (
                                        <span key={skill} className="flex items-center">
                                            <span className="hover:text-sky-300 transition-colors cursor-default">{skill}</span>
                                            {i < category.skills.length - 1 && (
                                                <span className="text-slate-600 ml-2 select-none">|</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
