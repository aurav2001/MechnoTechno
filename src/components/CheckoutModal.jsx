import { useState } from 'react';
import { FaTimes, FaWhatsapp, FaUser, FaPhoneAlt, FaEnvelope, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

const CheckoutModal = ({ isOpen, onClose, cart, total, onOrderSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        address: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Compile WhatsApp Message
        let message = `*NEW E-COMMERCE ORDER - MECHNOTECHNO*\n`;
        message += `====================================\n`;
        message += `👤 *Customer Name:* ${formData.name}\n`;
        message += `📞 *Phone:* ${formData.phone}\n`;
        message += `✉️ *Email:* ${formData.email}\n`;
        if (formData.company) {
            message += `🏢 *Company:* ${formData.company}\n`;
        }
        message += `📍 *Delivery Address:* ${formData.address}\n`;
        message += `====================================\n\n`;
        message += `📦 *ORDER ITEMS:*\n`;

        cart.forEach((item, index) => {
            message += `${index + 1}. *${item.name}* (Qty: ${item.quantity}) - ${item.price}\n`;
        });

        message += `\n====================================\n`;
        message += `💰 *Estimated Total:* ₹${total.toLocaleString('en-IN')}\n`;
        message += `====================================\n`;
        message += `Please confirm my order and share invoice/delivery timeline. Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918130513030?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        if (onOrderSuccess) {
            onOrderSuccess();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
            <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="px-8 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-display font-bold tracking-wide uppercase">Checkout Details</h3>
                        <p className="text-xs text-primary/80 mt-1">Complete your order via WhatsApp</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 overflow-y-auto space-y-6 flex-1">
                    {/* Name */}
                    <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name *</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                <FaUser size={14} />
                            </span>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Gulshan Pandey"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-800"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number *</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                <FaPhoneAlt size={14} />
                            </span>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-800"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address *</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                <FaEnvelope size={14} />
                            </span>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@company.com"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-800"
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Company Name (Optional)</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                                <FaBuilding size={14} />
                            </span>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="MechnoTech Industries"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-800"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="relative">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Shipping/Delivery Address *</label>
                        <div className="relative">
                            <span className="absolute top-3.5 left-0 pl-4 flex items-start text-gray-400">
                                <FaMapMarkerAlt size={14} />
                            </span>
                            <textarea
                                name="address"
                                required
                                rows="3"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your full business or delivery address"
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-gray-800 resize-none"
                            ></textarea>
                        </div>
                    </div>

                    {/* Order summary display */}
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mt-4">
                        <div className="flex justify-between items-center font-bold text-gray-900">
                            <span className="text-sm">Total items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                            <span className="text-base text-gray-900">Est. Total: <span className="text-secondary font-display font-extrabold text-lg">₹{total.toLocaleString('en-IN')}</span></span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_8px_20px_-6px_rgba(34,197,94,0.4)] flex items-center justify-center gap-3 hover:-translate-y-0.5 cursor-pointer mt-4"
                    >
                        <FaWhatsapp size={20} />
                        Place Order Via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutModal;
