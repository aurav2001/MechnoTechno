import { useState } from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { machines } from '../data/machines';
import MachineCard from '../components/MachineCard';
import { useCart } from '../context/CartContext';
import {
    FaArrowLeft,
    FaCheckCircle,
    FaCogs,
    FaShoppingCart,
    FaMinus,
    FaPlus,
    FaStar,
    FaShieldAlt,
    FaTruck,
    FaLock,
    FaCheck
} from 'react-icons/fa';
import brochurePdf from '../assets/brochure.pdf';

const MachineDetails = () => {
    const { id } = useParams();
    const { addToCart, setIsCartOpen } = useCart();
    
    const machine = machines.find(m => m.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    // Get all images (main + gallery)
    const allImages = machine ? [machine.image, ...(machine.gallery || [])] : [];
    const [selectedImage, setSelectedImage] = useState(0);

    if (!machine) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-900">
                <h2 className="text-3xl mb-4 font-display font-bold">Machine Not Found</h2>
                <Link to="/products" className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-primary hover:text-black transition-colors font-bold uppercase text-xs tracking-wider">
                    Back to Products
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(machine, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const handleBuyNow = () => {
        addToCart(machine, quantity);
        setIsCartOpen(true);
    };

    // Calculate related products (exclude current)
    const relatedProducts = machines
        .filter(m => m.id !== machine.id && (m.category === machine.category || m.featured))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 md:px-8">
            <SEO
                title={machine.name}
                description={machine.description}
                image={machine.image}
            />
            <div className="max-w-7xl mx-auto">
                <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors font-semibold uppercase tracking-wider text-xs">
                    <FaArrowLeft className="mr-2" /> Back to Products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                    {/* Image Section */}
                    <div className="space-y-6">
                        {/* Main Image */}
                        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl relative group bg-white">
                            <img
                                src={allImages[selectedImage]}
                                alt={machine.name}
                                className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        {allImages.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
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
                    <div className="text-gray-900 flex flex-col justify-between">
                        <div>
                            {/* Tags & Reviews */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                {machine.tag && (
                                    <span className="bg-gradient-to-r from-gray-900 to-primary text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                                        {machine.tag}
                                    </span>
                                )}
                                <span className="bg-gray-100 text-gray-700 font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md border border-gray-200">
                                    {machine.category === 'machines' ? 'Industrial Machine' : machine.category === 'raw-materials' ? 'Raw Material' : 'Precision Die'}
                                </span>
                                
                                <div className="flex items-center gap-1.5 ml-2 border-l border-gray-200 pl-4">
                                    <div className="flex text-amber-400 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < Math.floor(machine.rating || 5) ? 'text-amber-400' : 'text-gray-200'}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 font-semibold">
                                        {machine.rating || '5.0'} ({machine.reviewsCount || 10} reviews)
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-display font-extrabold mb-2 text-gray-900 tracking-tight leading-tight">{machine.name}</h1>
                            {machine.model && (
                                <p className="text-sm text-primary font-bold tracking-widest uppercase mb-6">MODEL: {machine.model}</p>
                            )}

                            {/* Price / Stock */}
                            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm mb-8 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                                <div>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Estimated Direct Price</span>
                                    <span className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
                                        {machine.price}
                                    </span>
                                </div>
                                <div className="flex flex-col items-start sm:items-end">
                                    <span className="bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-lg border border-emerald-100 mb-1">
                                        Ready to Ship
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">Ships in 2-3 Business Days</span>
                                </div>
                            </div>

                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-primary pl-6">
                                {machine.description}
                            </p>

                            {/* Quantity Selector & Interactive E-Commerce CTAs */}
                            <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200/60 mb-8">
                                <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Configure Quantity</span>
                                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                                    {/* Qty box */}
                                    <div className="flex items-center justify-between border border-gray-300 rounded-xl bg-white p-2 w-full sm:w-36">
                                        <button
                                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-black transition-colors cursor-pointer"
                                        >
                                            <FaMinus size={12} />
                                        </button>
                                        <span className="font-extrabold text-base text-gray-800 px-4">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(q => q + 1)}
                                            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-black transition-colors cursor-pointer"
                                        >
                                            <FaPlus size={12} />
                                        </button>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex-1 grid grid-cols-2 gap-3">
                                        <button
                                            onClick={handleAddToCart}
                                            className={`py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 border flex items-center justify-center gap-2 cursor-pointer ${
                                                added
                                                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-md'
                                                    : 'border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-gray-900 shadow-sm'
                                            }`}
                                        >
                                            {added ? (
                                                <>
                                                    <FaCheck size={14} />
                                                    Added to Cart
                                                </>
                                            ) : (
                                                <>
                                                    <FaShoppingCart size={14} />
                                                    Add to Cart
                                                </>
                                            )}
                                        </button>
                                        <button
                                            onClick={handleBuyNow}
                                            className="py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-xs bg-gray-900 text-white hover:bg-primary hover:text-black transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-3 border-t border-b border-gray-200 py-6 mb-10">
                                <div className="flex flex-col items-center text-center p-2">
                                    <FaLock className="text-gray-700 text-xl mb-2" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">Secure Checkout</span>
                                    <span className="text-[9px] text-gray-400 mt-0.5">Encrypted WhatsApp</span>
                                </div>
                                <div className="flex flex-col items-center text-center p-2 border-l border-r border-gray-100">
                                    <FaTruck className="text-gray-700 text-xl mb-2" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">Pan-India Delivery</span>
                                    <span className="text-[9px] text-gray-400 mt-0.5">Safe Road Cargo</span>
                                </div>
                                <div className="flex flex-col items-center text-center p-2">
                                    <FaShieldAlt className="text-gray-700 text-xl mb-2" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-800">Brand Warranty</span>
                                    <span className="text-[9px] text-gray-400 mt-0.5">1 Year Covered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Specs Section */}
                <div className="my-16 border-t border-gray-200 pt-16">
                    <h3 className="text-2xl font-display font-extrabold mb-8 flex items-center gap-3 text-gray-900">
                        <span className="w-10 h-10 bg-gradient-to-br from-primary to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                            <FaCogs className="text-white text-lg" />
                        </span>
                        Technical Specifications
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(machine.specs).map(([key, value], idx) => (
                            <div
                                key={key}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 border border-gray-200 hover:shadow-lg hover:border-primary/45 hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2 group-hover:text-primary transition-colors">
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
                <div className="mb-16">
                    <h3 className="text-2xl font-display font-extrabold mb-8 flex items-center gap-3 text-gray-900">
                        <span className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-md">
                            <FaCheckCircle className="text-white text-lg" />
                        </span>
                        Special Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {machine.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/20 transition-all duration-300 group"
                            >
                                <span className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                    <span className="text-white text-xs font-bold">✓</span>
                                </span>
                                <span className="text-gray-700 font-semibold">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Products Section */}
                {relatedProducts.length > 0 && (
                    <div className="border-t border-gray-200 pt-16">
                        <div className="text-center md:text-left mb-12">
                            <span className="block text-primary uppercase tracking-[0.2em] text-xs font-bold mb-3">
                                Handpicked Recommendations
                            </span>
                            <h3 className="text-3xl font-display font-extrabold text-gray-900 uppercase">
                                Related Products
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProducts.map((prod) => (
                                <MachineCard key={prod.id} machine={prod} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MachineDetails;
