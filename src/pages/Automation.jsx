import { Link } from 'react-router-dom';

const Automation = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-display font-bold text-gray-900 mb-8">Industrial Automation</h1>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl">
                    Streamline your production with our cutting-edge automation control systems. We specialize in PLC programming, HMI design, and SCADA integration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                        alt="Automation Control Panel"
                        className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Factory Solutions</h2>
                        <ul className="space-y-4">
                            {[
                                "Real-time monitoring and analytics",
                                "Predictive maintenance algorithms",
                                "Energy efficiency optimization",
                                "Seamless ERP integration"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-gray-700">
                                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="inline-block mt-8 px-8 py-3 bg-primary text-black font-bold uppercase tracking-wider rounded-lg hover:shadow-lg transition-all">
                            Get Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Automation;
