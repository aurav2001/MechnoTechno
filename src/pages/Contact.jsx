import { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'Sales Inquiry',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, success, error

    useEffect(() => {
        if (location.state) {
            setFormData(prev => ({
                ...prev,
                subject: location.state.subject || 'Sales Inquiry',
                message: location.state.message || ''
            }));
        }
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData(e.target);
        // Add the Web3Forms access key
        formDataObj.append("access_key", "a0d2d69e-2cb3-44fd-a279-23dfcd46f457");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: 'Sales Inquiry', message: '' });
                e.target.reset(); // Reset form DOM
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Submission failed", data);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
            <SEO title="Contact Us - Machine Services" />
            <div className="bg-white p-12 md:p-16 rounded-3xl w-full max-w-2xl shadow-xl border border-gray-200 relative overflow-hidden">

                {status === 'success' && (
                    <div className="absolute top-0 left-0 w-full bg-green-500 text-white font-bold text-center py-4 animate-pulse z-50">
                        Message Sent Successfully!
                    </div>
                )}
                {status === 'error' && (
                    <div className="absolute top-0 left-0 w-full bg-red-500 text-white font-bold text-center py-4 animate-pulse z-50">
                        Something went wrong. Please try again.
                    </div>
                )}

                <h1 className="text-5xl font-display font-bold mb-4 text-gray-900 text-center">Contact Us</h1>
                <p className="text-gray-500 text-center mb-12 text-lg">We are here to help you with your machine needs.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 text-sm font-medium ml-1">Name</label>
                            <input
                                name="name"
                                required
                                type="text"
                                onChange={handleChange}
                                placeholder="Your Name"
                                value={formData.name}
                                className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_15px_rgba(0,242,234,0.1)] transition-all duration-300 placeholder-gray-400"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 text-sm font-medium ml-1">Phone</label>
                            <input
                                name="phone"
                                type="tel"
                                onChange={handleChange}
                                placeholder="+91 8130513030"
                                value={formData.phone}
                                className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_15px_rgba(0,242,234,0.1)] transition-all duration-300 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-sm font-medium ml-1">Email</label>
                        <input
                            name="email"
                            required
                            type="email"
                            onChange={handleChange}
                            placeholder="Your Email"
                            value={formData.email}
                            className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_15px_rgba(0,242,234,0.1)] transition-all duration-300 placeholder-gray-400"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-sm font-medium ml-1">Subject</label>
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_15px_rgba(0,242,234,0.1)] transition-all duration-300 text-gray-700"
                        >
                            <option className="bg-white text-gray-900">Sales Inquiry</option>
                            <option className="bg-white text-gray-900">Technical Support</option>
                            <option className="bg-white text-gray-900">Partnership</option>
                            <option className="bg-white text-gray-900">Other</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-sm font-medium ml-1">Message</label>
                        <textarea
                            name="message"
                            required
                            onChange={handleChange}
                            placeholder="Your Message"
                            value={formData.message}
                            rows="5"
                            className="w-full p-4 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_15px_rgba(0,242,234,0.1)] transition-all duration-300 placeholder-gray-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 mt-6 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-white hover:border hover:border-gray-200 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
