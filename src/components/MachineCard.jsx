import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaCheck } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const MachineCard = ({ machine }) => {
    const { addToCart, setIsCartOpen } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(machine, 1);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const handleBuyNow = () => {
        addToCart(machine, 1);
        setIsCartOpen(true);
    };

    return (
        <div className="bg-white rounded-3xl overflow-hidden relative flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group border border-gray-100">
            {/* Image Block */}
            <div className="h-72 overflow-hidden relative bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-40 transition-opacity duration-500 group-hover:opacity-20"></div>

                {/* Promo Tag Badge */}
                {machine.tag && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-gray-900 to-primary text-white font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md">
                        {machine.tag}
                    </div>
                )}

                {/* In Stock Badge */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-lg border border-gray-100">
                    <span className="text-gray-900 font-bold text-xs tracking-wide">In Stock</span>
                </div>

                <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
            </div>

            {/* Content Details */}
            <div className="p-8 flex-1 flex flex-col relative">
                {/* Visual Category Label */}
                <span className="text-[10px] text-primary uppercase font-bold tracking-[0.2em] mb-2 block">
                    {machine.category === 'machines' ? 'Industrial Machine' : machine.category === 'raw-materials' ? 'Raw Material' : 'Precision Die'}
                </span>

                <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {machine.name}
                </h3>

                {/* E-commerce Ratings */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < Math.floor(machine.rating || 5) ? 'text-amber-400' : 'text-gray-200'}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 font-semibold tracking-wide">
                        {machine.rating || '5.0'} ({machine.reviewsCount || 10} reviews)
                    </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {machine.description}
                </p>

                {/* Pricing & Stock Status */}
                <div className="flex justify-between items-baseline mb-6 border-t border-gray-50 pt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Est. Price</span>
                        <span className="text-2xl font-display font-extrabold text-gray-900 tracking-tight">
                            {machine.price}
                        </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase tracking-widest">
                        Ready to Ship
                    </span>
                </div>

                {/* Actions Button Block */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <button
                        onClick={handleAddToCart}
                        className={`py-3 px-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border flex items-center justify-center gap-2 cursor-pointer ${
                            added
                                ? 'bg-emerald-500 border-emerald-500 text-white shadow-md'
                                : 'border-gray-900 bg-white hover:bg-gray-900 hover:text-white text-gray-900 hover:shadow-md'
                        }`}
                    >
                        {added ? (
                            <>
                                <FaCheck size={12} />
                                Added
                            </>
                        ) : (
                            <>
                                <FaShoppingCart size={12} />
                                Add To Cart
                            </>
                        )}
                    </button>
                    <button
                        onClick={handleBuyNow}
                        className="py-3 px-4 text-xs font-bold uppercase tracking-wider bg-gray-900 hover:bg-primary hover:text-black text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                    >
                        Buy Now
                    </button>
                </div>

                <div className="text-center pt-3 border-t border-gray-100">
                    <Link
                        to={`/machine/${machine.id}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors duration-300 group/link"
                    >
                        Configure & Details
                        <span className="text-base transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MachineCard;
