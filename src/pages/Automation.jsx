import { Link } from 'react-router-dom';
import { FaCogs, FaNetworkWired, FaRobot, FaEye, FaCheckCircle, FaArrowRight, FaChartLine, FaShieldAlt, FaClock } from 'react-icons/fa';

const Automation = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-32">

            {/* 1. HERO / INTRO SECTION (Preserved & Enhanced) */}
            <div className="max-w-7xl mx-auto px-8 mb-24">
                <header className="text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4 animate-pulse">
                        Smart Industry 4.0
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8">
                        Industrial <span className="text-primary">Automation</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Streamline your production with our cutting-edge automation control systems. We specialize in PLC programming, HMI design, and SCADA integration to transform your manufacturing process.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                            alt="Automation Control Panel"
                            className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold font-display text-gray-900 mb-8">Smart Factory Solutions</h2>
                        <ul className="space-y-6">
                            {[
                                "Real-time monitoring and analytics",
                                "Predictive maintenance algorithms",
                                "Energy efficiency optimization",
                                "Seamless ERP integration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-gray-700 p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-transform hover:-translate-x-2">
                                    <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                                        <FaCheckCircle />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-wider rounded-full hover:bg-primary hover:text-black transition-all shadow-lg hover:shadow-primary/50 group">
                            Get Consultation
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2. CORE COMPETENCIES SECTION */}
            <section className="bg-white py-24 px-8 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Core Competencies</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We deliver end-to-end automation expertise across key industrial domains.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaCogs />,
                                title: "PLC Programming",
                                description: "Logic development for Siemens, Allen Bradley, and Mitsubishi controllers."
                            },
                            {
                                icon: <FaNetworkWired />,
                                title: "SCADA & HMI",
                                description: "Intuitive interfaces and data acquisition systems for total plant visibility."
                            },
                            {
                                icon: <FaRobot />,
                                title: "Motion Control",
                                description: "Precise servo and VFD control for complex multi-axis machinery."
                            },
                            {
                                icon: <FaEye />,
                                title: "Vision Systems",
                                description: "Automated quality inspection and defect detection using AI vision."
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group">
                                <div className="text-4xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section className="py-24 px-8 bg-gray-900 text-white relative overflow-hidden">
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

            {/* 4. OUR PROCESS */}
            <section className="py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900">Our Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Analysis", desc: "We study your current workflow and identify bottlenecks." },
                            { step: "02", title: "Design", desc: "Our engineers create detailed schematics and logic flows." },
                            { step: "03", title: "Development", desc: "Rigorous coding and simulation testing." },
                            { step: "04", title: "Deployment", desc: "On-site installation, commissioning, and staff training." }
                        ].map((item, index) => (
                            <div key={index} className="relative p-6 pt-12 border-t-4 border-gray-200 hover:border-primary transition-colors duration-300">
                                <span className="absolute top-0 left-0 -translate-y-1/2 bg-white px-2 py-1 text-3xl font-display font-bold text-gray-300">{item.step}</span>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA SECTION */}
            <section className="bg-primary py-20 px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-8">Ready to Automate Your Workflow?</h2>
                    <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
                        Take the first step towards a smarter factory. Contact our automation experts today for a free site assessment.
                    </p>
                    <Link to="/contact" className="inline-block px-10 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-gray-900 hover:shadow-2xl transition-all hover:-translate-y-1">
                        Start Your Project
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Automation;
