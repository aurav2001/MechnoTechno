import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { machines } from '../data/machines';
import { FaArrowLeft, FaCheckCircle, FaCogs, FaWhatsapp } from 'react-icons/fa';
import brochurePdf from '../assets/brochure.pdf';

const MachineDetails = () => {
    const { id } = useParams();
    const machine = machines.find(m => m.id === parseInt(id));

    // Get all images (main + gallery)
    const allImages = machine ? [machine.image, ...(machine.gallery || [])] : [];
    const [selectedImage, setSelectedImage] = useState(0);

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
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl relative group bg-white">
                            <img
                                src={allImages[selectedImage]}
                                alt={machine.name}
                                className="w-full h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        {allImages.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2 mt-10">
                                {allImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === idx
                                            ? 'border-primary shadow-lg scale-105'
                                            : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${machine.name} view ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info Section */}
                    <div className="text-gray-900">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-2 text-gray-900">{machine.name}</h1>
                        {machine.model && (
                            <p className="text-lg text-primary font-semibold mb-4">MODEL: {machine.model}</p>
                        )}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-2xl text-primary font-bold">{machine.price}</span>
                            <span className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600 border border-gray-200">In Stock</span>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-primary pl-6">
                            {machine.description}
                        </p>

                        {/* Technical Specs Section */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                                <span className="w-10 h-10 bg-gradient-to-br from-primary to-teal-600 rounded-lg flex items-center justify-center">
                                    <FaCogs className="text-white text-lg" />
                                </span>
                                Technical Specifications
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {Object.entries(machine.specs).map(([key, value], idx) => (
                                    <div
                                        key={key}
                                        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
                                    >
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                                            {key.replace(/_/g, ' ')}
                                        </p>
                                        <p className="text-sm font-bold text-gray-800 leading-tight">
                                            {value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Features Section */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                                <span className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                    <FaCheckCircle className="text-white text-lg" />
                                </span>
                                Special Features
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {machine.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-300 group"
                                    >
                                        <span className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                            <span className="text-white text-xs font-bold">✓</span>
                                        </span>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={`https://wa.me/8826266711?text=Hi, I am interested in the ${machine.name} (${machine.price}). Please send me a quote.`}
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
