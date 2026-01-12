import { Link } from 'react-router-dom';
import { FaWarehouse, FaDolly, FaBarcode, FaBoxes, FaTruckMoving, FaCogs, FaArrowRight, FaServer } from 'react-icons/fa';

const Warehouse = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-32">

            {/* 1. HERO SECTION */}
            <div className="max-w-7xl mx-auto px-8 mb-24">
                <header className="text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4 animate-pulse">
                        Intelligent Logistics
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8">
                        Smart <span className="text-primary">Warehousing</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Maximize your storage density and throughput with fully automated logistics solutions. From AS/RS to autonomous mobile robots, we redefine efficiency.
                    </p>
                </header>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop"
                        alt="Automated Warehouse"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 z-20 text-white max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Future-Proof Your Supply Chain</h2>
                        <p className="text-lg text-gray-200">Scalable solutions that grow with your business demands.</p>
                    </div>
                </div>
            </div>

            {/* 2. CORE TECHNOLOGIES */}
            <section className="bg-white py-24 px-8 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Key Technologies</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Integrated systems working in unison to deliver 99.9% order accuracy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* AS/RS */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gray-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-6">
                                <span className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl text-primary mb-6">
                                    <FaWarehouse />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">AS/RS Systems</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Automated Storage and Retrieval Systems utilizing vertical space up to 40 meters. High-density storage for pallets and bins.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><FaCogs className="text-primary" /> Crane speed: 200m/min</li>
                                    <li className="flex items-center gap-2"><FaBoxes className="text-primary" /> Single & Double deep</li>
                                </ul>
                            </div>
                        </div>

                        {/* AGVs & AMRs */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gray-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-6">
                                <span className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl text-blue-600 mb-6">
                                    <FaDolly />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">AGVs & AMRs</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Autonomous Guided Vehicles for flexible material transport. Laser navigation ensures safety and precise pathfinding without floor tracks.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><FaCogs className="text-blue-600" /> Payload: up to 1500kg</li>
                                    <li className="flex items-center gap-2"><FaTruckMoving className="text-blue-600" /> 24/7 Operation</li>
                                </ul>
                            </div>
                        </div>

                        {/* WMS */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gray-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-6">
                                <span className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl text-purple-600 mb-6">
                                    <FaBarcode />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart WMS</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Warehouse Management Software acting as the brain of your operation. Real-time inventory tracking and order orchestration.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><FaServer className="text-purple-600" /> ERP Integration</li>
                                    <li className="flex items-center gap-2"><FaBarcode className="text-purple-600" /> RFID & IoT Ready</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS STATS */}
            <section className="py-24 px-8 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <div className="text-5xl font-display font-bold text-primary mb-2">300%</div>
                        <div className="text-gray-400 uppercase tracking-widest text-sm">Throughput Increase</div>
                    </div>
                    <div>
                        <div className="text-5xl font-display font-bold text-primary mb-2">60%</div>
                        <div className="text-gray-400 uppercase tracking-widest text-sm">Space Savings</div>
                    </div>
                    <div>
                        <div className="text-5xl font-display font-bold text-primary mb-2">99.9%</div>
                        <div className="text-gray-400 uppercase tracking-widest text-sm">Order Accuracy</div>
                    </div>
                    <div>
                        <div className="text-5xl font-display font-bold text-primary mb-2">24h</div>
                        <div className="text-gray-400 uppercase tracking-widest text-sm">Continuous Uptime</div>
                    </div>
                </div>
            </section>


            {/* 4. CTA */}
            <section className="py-24 px-8">
                <div className="max-w-5xl mx-auto text-center border-2 border-dashed border-gray-200 rounded-[3rem] p-12 hover:border-primary transition-colors duration-300">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8">Optimize Your Logistics</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Don't let manual processes slow you down. Schedule a consultation to design your custom automated warehouse.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-black transition-all hover:shadow-xl">
                        Start Planning
                        <FaArrowRight />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Warehouse;
