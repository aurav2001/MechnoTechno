import { Link } from 'react-router-dom';
import { FaRobot, FaHandRock, FaPaintBrush, FaBoxOpen, FaMicrochip, FaShieldAlt, FaArrowRight, FaCogs } from 'react-icons/fa';

const Robotics = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-32">

            {/* 1. HERO SECTION */}
            <div className="max-w-7xl mx-auto px-8 mb-24">
                <header className="text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4 animate-pulse">
                        Next-Gen Manufacturing
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8">
                        Advanced <span className="text-primary">Robotics</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Deploy intelligent robotic arms for precision tasks. From high-speed pick-and-place to heavy-duty welding, our robots work 24/7 with zero fatigue and micron-level accuracy.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mb-8 hover:border-primary/30 transition-all duration-300">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <FaRobot className="text-primary" /> Collaborative Robots
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                "Cobots" designed to work safely alongside humans. With built-in force sensors and collision detection, they boost productivity without the need for extensive safety caging.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Payload: 3kg - 16kg</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Reach: 500mm - 1300mm</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Applications: Assembly, Inspection, Lab analysis</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all"></div>
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 relative z-10">
                                <FaHandRock className="text-primary" /> Heavy Duty Arms
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4 relative z-10">
                                Industrial powerhouses for the toughest environments. Engineered for speed, durability, and massive payloads in automotive and foundry sectors.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-2 relative z-10">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Payload: 20kg - 2000kg</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Reach: 1.5m - 4.0m</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Applications: Welding, Palletizing, Casting</li>
                            </ul>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-l from-primary to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=800&auto=format&fit=crop"
                            alt="Robotic Arm"
                            className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* 2. APPLICATIONS GRID */}
            <section className="bg-white py-24 px-8 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Industrial Applications</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Versatile automation solutions for every stage of your production line.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <FaCogs />, title: "Machining", desc: "CNC loading/unloading and material removal." },
                            { icon: <FaPaintBrush />, title: "Finishing", desc: "Painting, polishing, and sandblasting with consistency." },
                            { icon: <FaBoxOpen />, title: "Pallatizing", desc: "High-speed stacking and packaging logistics." },
                            { icon: <FaMicrochip />, title: "Assembly", desc: "Precision electronics and parts assembly." }
                        ].map((app, index) => (
                            <div key={index} className="group p-8 bg-gray-50 rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
                                <div className="text-4xl text-gray-900 group-hover:text-primary mb-6 transition-colors">{app.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{app.title}</h3>
                                <p className="text-gray-600 group-hover:text-gray-400 text-sm leading-relaxed">{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA CTA */}
            <section className="py-24 px-8">
                <div className="max-w-4xl mx-auto text-center bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to Automate?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Calculate your potential ROI with our automation experts. We provide full simulation and feasibility studies.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 shadow-lg">
                                Get A Quote
                                <FaArrowRight />
                            </Link>
                            <Link to="/products" className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all">
                                View Robots
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Robotics;
