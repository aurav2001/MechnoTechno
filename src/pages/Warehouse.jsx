import { Link } from 'react-router-dom';

const Warehouse = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-display font-bold text-gray-900 mb-8">Warehouse Systems</h1>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl">
                    Optimize your logistics with automated storage and retrieval systems (AS/RS). Maximize space and minimize errors.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="text-4xl mb-4">📦</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Conveyor Systems</h3>
                        <p className="text-gray-600">High-speed sorting and transport conveyors that route packages intelligently.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="text-4xl mb-4">🏭</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">AS/RS</h3>
                        <p className="text-gray-600">Automated picking cranes that utilize vertical space up to 40 meters.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">WMS Software</h3>
                        <p className="text-gray-600">Complete inventory tracking with barcode and RFID integration.</p>
                    </div>
                </div>

                <div className="text-center">
                    <Link to="/contact" className="inline-block px-10 py-4 bg-black text-white font-bold uppercase tracking-wider rounded-lg hover:bg-primary hover:text-black transition-all">
                        Upgrade Your Warehouse
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Warehouse;
