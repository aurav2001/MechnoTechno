import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black text-gray-400 py-20 px-8 border-t border-white/5 mt-auto relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="flex flex-col col-span-1 md:col-span-1">
                    <h3 className="text-white text-2xl font-display font-bold mb-6 tracking-wider">MECHNO-TECHNO</h3>
                    <p className="text-lg leading-relaxed mb-6">Leading provider of industrial machinery. Engineering excellence since 2026.</p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col">
                    <h4 className="text-white text-lg uppercase tracking-widest font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Contact', path: '/contact' },
                            { name: 'Testimonials', path: '/testimonials' },
                            { name: 'Terms & Conditions', path: '/terms' }
                        ].map((link) => (
                            <li key={link.name}>
                                <a href={link.path} className="hover:text-primary transition-colors duration-300 flex items-center gap-2">
                                    <span className="text-primary text-xs">›</span> {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="flex flex-col">
                    <h4 className="text-white text-lg uppercase tracking-widest font-bold mb-6">Contact</h4>
                    <p className="mb-2">Email: info@machinepro.com</p>
                    <p className="mb-2">Phone: +91 8826266711</p>
                    <p>Address: NOIDA SEC-63, Work Edge</p>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col">
                    <h4 className="text-white text-lg uppercase tracking-widest font-bold mb-6">Newsletter</h4>
                    <p className="mb-4 text-sm">Subscribe for latest machine updates.</p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 p-3 rounded text-white focus:border-primary focus:outline-none transition-colors"
                        />
                        <button className="bg-primary text-black font-bold uppercase tracking-widest py-3 rounded hover:bg-white transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p>&copy; 2026 MechnoTechno. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center shadow-lg hover:-translate-y-2 transition-transform z-10"
                title="Back to Top"
            >
                <FaArrowUp />
            </button>

        </footer>
    );
};

export default Footer;
