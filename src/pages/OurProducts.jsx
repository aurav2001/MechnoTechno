import MachineCard from '../components/MachineCard';
import { machines } from '../data/machines';
import { FaWhatsapp } from 'react-icons/fa';

const OurProducts = () => {
    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            {/* Header Section */}
            <div className="bg-white py-16 px-4 mb-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="block text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4 animate-pulse">
                        Explore Our Full Range
                    </span>
                    <h1 className="text-4xl md:text-6xl uppercase font-display font-extrabold tracking-tight text-gray-900 m-0 relative inline-block">
                        Our <span className="text-primary relative inline-block">
                            Products
                            <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary blur-md opacity-70 rounded-full"></span>
                        </span>
                    </h1>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                        Discover our complete catalog of industrial-grade machinery designed for performance, precision, and durability.
                    </p>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
                    {machines.map((machine) => (
                        <MachineCard key={machine.id} machine={machine} />
                    ))}
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/8826266711"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                title="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
            </a>
        </div>
    );
};

export default OurProducts;
