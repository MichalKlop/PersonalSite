import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-12 pb-6">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-100">
                            Let's Connect
                        </h2>
                        <p className="text-slate-400 mb-6 max-w-md text-base">
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/michal-klopotowski/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-sky-600 hover:text-white text-slate-400 transition-all border border-slate-700 hover:border-sky-500">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/MichalKlop" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white text-slate-400 transition-all border border-slate-700 hover:border-slate-500">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="mailto:mklopoto@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-emerald-600 hover:text-white text-slate-400 transition-all border border-slate-700 hover:border-emerald-500">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-200 mb-3">Contact Info</h3>
                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                <Mail className="w-4 h-4 text-sky-400" />
                            </div>
                            <a href="mailto:mklopoto@gmail.com" className="hover:text-sky-400 transition-colors text-base">mklopoto@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                <Phone className="w-4 h-4 text-emerald-400" />
                            </div>
                            <span className="text-base">650–556–6543</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-400">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                <MapPin className="w-4 h-4 text-amber-400" />
                            </div>
                            <span className="text-base">Eugene, OR</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-6 text-center text-slate-600 text-sm">
                    <p>&#169; {new Date().getFullYear()} Michal Klopotowski</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
