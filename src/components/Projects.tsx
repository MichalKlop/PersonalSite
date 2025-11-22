import { motion } from 'framer-motion';
import { Globe, ExternalLink, Github } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    type: 'Web Map' | 'Static Map' | 'ML Project';
    liveUrl?: string;
    codeUrl?: string;
    imagePath?: string;
}

const Projects = () => {
    const projects: Project[] = [
        {
            title: "F1 Circuits",
            description: "Interactive map of 24 Formula 1™ 2025 circuits with flags and detailed race information.",
            type: "Web Map",
            liveUrl: "https://michalklop.github.io/Portfolio/Web/TrackMap/",
            codeUrl: "https://github.com/MichalKlop/WebMapping/tree/main/TrackMap",
            imagePath: "/assets/trackmap.png"
        },
        {
            title: "FERNS Pesticides",
            description: "Interactive map of Oregon pesticide applications (2014-2024) from FERNS data, filterable by type.",
            type: "Web Map",
            liveUrl: "https://www.beyondtoxics.org/work/pesticides-and-communities/pesticide-map/",
            codeUrl: "https://github.com/InfoGraphicsUO/BeyondToxics/tree/main",
            imagePath: "/assets/pesticide-map.png"
        },
        {
            title: "DermoAI",
            description: "Skin condition detection app with LLM-powered treatment recommendations. NVIDIA BeaverHacks Winner.",
            type: "ML Project",
            liveUrl: "https://dermoai.com/",
            codeUrl: "https://github.com/itaym-intel/dermo",
            imagePath: "/assets/dermoai.png"
        },
        {
            title: "Census Choropleth",
            description: "Proportion of People Born In-State from the 2020 Census.",
            type: "Static Map",
            liveUrl: "https://michalklop.github.io/Portfolio/Static/Choropleth/",
            imagePath: "/assets/choropleth.png"
        },
        {
            title: "Canyon de Chelly",
            description: "3D Diorama visualization of the Canyon de Chelly Watershed.",
            type: "Static Map",
            liveUrl: "https://michalklop.github.io/Portfolio/Static/Diorama/",
            imagePath: "/assets/diorama.png"
        },
        {
            title: "Deep-Sea Internet Cables",
            description: "Deep-Sea Internet Cables and the Ownership of Global Infrastructure.",
            type: "Static Map",
            liveUrl: "https://michalklop.github.io/Portfolio/Static/InternetCables/",
            imagePath: "/assets/cables.png"
        }
    ];

    return (
        <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
                    <Globe className="text-sky-400" />
                    <span>Portfolio</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-800/40 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-500/50 transition-all hover:shadow-lg hover:shadow-sky-500/10 flex flex-col h-full"
                        >
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block cursor-pointer"
                            >
                                <div className="h-48 bg-slate-700/50 relative overflow-hidden flex items-center justify-center group-hover:bg-slate-700/70 transition-colors">
                                    {project.imagePath ? (
                                        <img
                                            src={`${import.meta.env.BASE_URL}${project.imagePath.startsWith('/') ? project.imagePath.slice(1) : project.imagePath}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center gap-2 text-slate-500">
                                            <span className="text-xs uppercase tracking-widest opacity-50">Screenshot Placeholder</span>
                                            {project.type === 'Web Map' ? <Globe className="w-12 h-12 opacity-50" /> :
                                                project.type === 'ML Project' ? <ExternalLink className="w-12 h-12 opacity-50" /> :
                                                    <div className="w-12 h-12 border-2 border-slate-600 border-dashed rounded flex items-center justify-center opacity-50">IMG</div>}
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                    <span className="absolute bottom-3 right-3 text-xs font-mono px-2 py-1 rounded bg-slate-900/80 text-slate-300 border border-slate-600 z-10">
                                        {project.type}
                                    </span>
                                </div>
                            </a>

                            <div className="p-6 flex flex-col flex-grow">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer"
                                >
                                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                                </a>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">{project.description}</p>

                                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700/50">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300"
                                        >
                                            <ExternalLink className="w-4 h-4" /> View Live
                                        </a>
                                    )}
                                    {project.codeUrl && (
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-200"
                                        >
                                            <Github className="w-4 h-4" /> View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
