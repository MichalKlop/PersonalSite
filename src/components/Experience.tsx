import { motion } from 'framer-motion';
import { Briefcase, Building2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Cartographer & Data Visualization Designer",
            company: "InfoGraphics Lab, OR",
            period: "July 2025 - Present",
            description: [
                "Developed research-driven cartographic and data visualization projects for print, web, and mobile.",
                "Utilized GIS software (ArcGIS), spatial data analysis (R, Python), and web mapping technologies (Mapbox, D3).",
                "Collaborated with researchers to translate complex spatial data into accessible visual narratives."
            ]
        },
        {
            title: "Learning Assistant (Computer Science)",
            company: "University of Oregon, OR",
            period: "September 2023 - June 2025",
            description: [
                "Facilitated peer support in lab sections and office hours for introductory Computer Programming courses.",
                "Hosted 3-5 weekly sessions focused on debugging, problem-solving, and conceptual understanding.",
                "Built strong communication skills and deepened expertise in programming fundamentals."
            ]
        },
        {
            title: "Research Assistant",
            company: "University of Oregon, OR",
            period: "July 2024 - September 2024",
            description: [
                "Contributed to graduate AI research on creating subtle and effective backdoor attacks on text classifiers.",
                "Improved the AttrBkd method's attack success rate by 13.9% (to 90.4%) while decreasing human detection by 15.6%."
            ]
        }
    ];

    return (
        <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
                    <Briefcase className="text-amber-400" />
                    <span>Experience</span>
                </h2>

                <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-slate-900"></span>

                            <div className="mb-4">
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                                    <span className="text-sm text-slate-500">• {exp.period}</span>
                                </div>

                                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                                    <Building2 className="w-4 h-4" />
                                    {exp.company}
                                </div>
                            </div>

                            <ul className="space-y-2 pl-0">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                                        <span className="text-slate-600 flex-shrink-0">•</span>
                                        <span className="flex-1">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
