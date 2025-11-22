const TopographyBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-30">
            <svg
                className="absolute w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-slate-700"
                    d="M-100,500 Q200,300 500,500 T1000,500 T1500,500"
                />
                {/* Generative-looking contour lines - simplified for manual SVG, 
            in a real app we might use a library or a more complex generated path set. 
            For now, I'll add a few organic waves to simulate topography. */}
                <g fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-600 opacity-20">
                    <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 C1150,200 1350,0 1500,100" />
                    <path d="M0,200 C150,300 350,100 500,200 C650,300 850,100 1000,200 C1150,300 1350,100 1500,200" />
                    <path d="M0,300 C150,400 350,200 500,300 C650,400 850,200 1000,300 C1150,400 1350,200 1500,300" />
                    <path d="M0,400 C150,500 350,300 500,400 C650,500 850,300 1000,400 C1150,500 1350,300 1500,400" />
                    <path d="M0,500 C150,600 350,400 500,500 C650,600 850,400 1000,500 C1150,600 1350,400 1500,500" />
                    <path d="M0,600 C150,700 350,500 500,600 C650,700 850,500 1000,600 C1150,700 1350,500 1500,600" />
                    <path d="M0,700 C150,800 350,600 500,700 C650,800 850,600 1000,700 C1150,800 1350,600 1500,700" />
                    <path d="M0,800 C150,900 350,700 500,800 C650,900 850,700 1000,800 C1150,900 1350,700 1500,800" />
                </g>

                {/* Add some 'islands' or closed loops for hills */}
                <g fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500 opacity-10">
                    <circle cx="200" cy="200" r="50" />
                    <circle cx="200" cy="200" r="80" />
                    <circle cx="200" cy="200" r="120" />

                    <circle cx="1200" cy="600" r="60" />
                    <circle cx="1200" cy="600" r="100" />
                    <circle cx="1200" cy="600" r="150" />
                </g>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/0"></div>
        </div>
    );
};

export default TopographyBackground;
