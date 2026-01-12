
const projects = [
    {
        id: 1,
        title: "Automated Assembly Line",
        client: "AutoCorp",
        image: "https://images.unsplash.com/photo-1565514020176-db8b3a017992?w=800&auto=format&fit=crop",
        description: "Full automation overhaul for a major automotive manufacturer, increasing output by 40%."
    },
    {
        id: 2,
        title: "Smart Warehouse System",
        client: "LogiTech",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop",
        description: "Implementation of AI-driven conveyor and sorting systems for a 50k sqft warehouse."
    },
    {
        id: 3,
        title: "Robotic Welding Station",
        client: "MetalWorks Inc",
        image: "https://images.unsplash.com/photo-1537462713205-e512641bfb18?w=800&auto=format&fit=crop",
        description: "High-precision robotic arms installed for aerospace component welding."
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">Our Projects</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Delivering excellence through innovation. Here are some of our landmark installations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <div className="text-primary text-sm font-bold uppercase tracking-wider mb-2">{project.client}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
