import { useParams, Link } from 'react-router-dom';
import { machines } from '../data/machines';
import { FaArrowLeft, FaCheckCircle, FaCogs, FaWhatsapp } from 'react-icons/fa';
import brochurePdf from '../assets/brochure.pdf';

const MachineDetails = () => {
    const { id } = useParams();
    const machine = machines.find(m => m.id === parseInt(id));

    if (!machine) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-900">
                <h2 className="text-3xl mb-4">Machine Not Found</h2>
                <Link to="/" className="text-primary hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-8">
            <div className="max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
                    <FaArrowLeft className="mr-2" /> Back to Machines
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image Section */}
                    <div className="space-y-8">
                        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl relative group bg-white">
                            <img
                                src={machine.image}
                                alt={machine.name}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="text-gray-900">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase text-gray-900">{machine.name}</h1>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-2xl text-primary font-bold">{machine.price}</span>
                            <span className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600 border border-gray-200">In Stock</span>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary pl-6">
                            {machine.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                                    <FaCogs className="text-primary" /> Technical Specs
                                </h3>
                                <ul className="space-y-3">
                                    {Object.entries(machine.specs).map(([key, value]) => (
                                        <li key={key} className="flex justify-between border-b border-gray-200 pb-2">
                                            <span className="text-gray-500 capitalize">{key.replace('_', ' ')}:</span>
                                            <span className="font-semibold text-gray-800">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                                    <FaCheckCircle className="text-primary" /> Key Features
                                </h3>
                                <ul className="space-y-3">
                                    {machine.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <span className="text-primary mt-1">✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={`https://wa.me/918851020767?text=Hi, I am interested in the ${machine.name} (${machine.price}). Please send me a quote.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-widest rounded hover:bg-[#20bd5a] hover:scale-[1.02] transition-all duration-300 text-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center gap-2"
                            >
                                <FaWhatsapp className="text-xl" />
                               SEND ENQUIRY
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MachineDetails;
