import { FaChartLine, FaShieldAlt, FaClock, FaCogs, FaRocket, FaLightbulb } from 'react-icons/fa';

const Company = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50">
            {/* Intro Section - Constrained */}
            <div className="max-w-4xl mx-auto text-center px-8">
                <img
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&auto=format&fit=crop"
                    alt="Company Headquarters"
                    className="w-full h-[400px] object-cover rounded-3xl shadow-xl mb-12"
                />
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8">About MechnoTechno</h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                    MechnoTechno is a global leader in industrial automation and heavy machinery solutions.
                    Founded in 2026, we have empowered over 30+ factories to achieve peak efficiency through our state-of-the-art technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                        <div className="text-4xl font-bold text-primary mb-2">15+</div>
                        <div className="text-gray-500 font-medium">Years Experience</div>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                        <div className="text-4xl font-bold text-primary mb-2">100+</div>
                        <div className="text-gray-500 font-medium">Projects Delivered</div>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-gray-500 font-medium">Global Support</div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us - Full Width */}
            <section className="py-24 px-8 bg-gray-900 text-white relative overflow-hidden mb-16">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Why Partner With Us?</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Engineering Excellence</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don't just supply hardware; we engineer comprehensive solutions that drive productivity and reduce operational costs.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                                <FaChartLine className="text-3xl text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">ROI Focused</h3>
                                <p className="text-gray-400 text-sm">Solutions designed to pay for themselves through efficiency gains.</p>
                            </div>
                            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                                <FaShieldAlt className="text-3xl text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">Robust Safety</h3>
                                <p className="text-gray-400 text-sm">Compliance with SIL and ISO safety standards is built-in.</p>
                            </div>
                            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                                <FaClock className="text-3xl text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                                <p className="text-gray-400 text-sm">Round-the-clock technical assistance for minimum downtime.</p>
                            </div>
                            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                                <FaCogs className="text-3xl text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">Custom Engineering</h3>
                                <p className="text-gray-400 text-sm">Tailored solutions for your specific manufacturing challenges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section - Constrained */}
            {/* Mission & Vision Section - Two Column */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                            <FaRocket className="text-3xl text-primary" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To revolutionize the manufacturing industry by making advanced robotics and automation accessible, reliable, and sustainable for businesses of all sizes.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
                            <FaLightbulb className="text-3xl text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We believe in a future where machines and humans work in perfect harmony to build a better world, driving innovation through intelligent engineering.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
