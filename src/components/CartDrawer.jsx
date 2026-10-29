import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaTimes, FaMinus, FaPlus, FaTrashAlt, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import CheckoutModal from './CheckoutModal';

const CartDrawer = () => {
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal
    } = useCart();

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    if (!isCartOpen) return null;

    const handleCheckoutSuccess = () => {
        setIsCheckoutOpen(false);
        setIsCartOpen(false);
        clearCart();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Cart Drawer */}
            <div className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-2xl flex flex-col transition-all duration-300 ease-out border-l border-gray-100 animate-[slideInRight_0.3s_ease-out]">
                {/* Header */}
                <div className="px-6 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <FaShoppingCart className="text-lg text-gray-900" />
                        </div>
                        <div>
                            <h3 className="text-lg font-display font-bold text-gray-900 tracking-wider">Your Cart</h3>
                            <p className="text-xs text-gray-500 font-medium">
                                {cart.length === 0 ? 'Empty' : `${cart.reduce((sum, item) => sum + item.quantity, 0)} Items`}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-gray-400 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Body / Items List */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                                <FaShoppingCart className="text-4xl text-gray-300" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Cart is empty</h4>
                            <p className="text-gray-500 text-sm max-w-xs mb-8">
                                Add some of our premium industrial machinery or raw materials to get started.
                            </p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="px-8 py-3 bg-gray-900 hover:bg-primary hover:text-black text-white font-bold uppercase tracking-wider rounded-full transition-all duration-300"
                            >
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm"
                            >
                                {/* Thumbnail */}
                                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 flex flex-col justify-between min-w-0">
                                    <div>
                                        <h5 className="font-bold text-gray-900 text-sm truncate group-hover:text-primary transition-colors">
                                            {item.name}
                                        </h5>
                                        <p className="text-xs text-gray-500 mt-0.5">{item.model || 'Industrial Item'}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="font-display font-bold text-sm text-gray-900">
                                            {item.price}
                                        </span>
                                        {/* Qty Controls */}
                                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50 scale-90">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                            >
                                                <FaMinus size={10} />
                                            </button>
                                            <span className="px-3 text-xs font-bold text-gray-800">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                            >
                                                <FaPlus size={10} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Remove Button */}
                                <div className="flex items-start">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-300 hover:text-red-500 p-1 transition-colors"
                                        title="Remove item"
                                    >
                                        <FaTrashAlt size={14} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 text-sm font-semibold">Subtotal Estimate</span>
                            <span className="font-display font-extrabold text-2xl text-gray-900">
                                ₹{getCartTotal().toLocaleString('en-IN')}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-normal">
                            Tax and shipping calculations will be finalized during checkout verification via WhatsApp.
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <button
                                onClick={() => setIsCheckoutOpen(true)}
                                className="w-full py-4 bg-gray-900 hover:bg-primary hover:text-black text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 cursor-pointer"
                            >
                                Proceed to Checkout
                                <FaArrowRight size={14} />
                            </button>

                            <button
                                onClick={clearCart}
                                className="text-xs text-center text-gray-400 hover:text-red-500 font-semibold py-2 transition-colors uppercase tracking-wider"
                            >
                                Clear All Items
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Checkout Modal */}
            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                cart={cart}
                total={getCartTotal()}
                onOrderSuccess={handleCheckoutSuccess}
            />
        </>
    );
};

export default CartDrawer;
