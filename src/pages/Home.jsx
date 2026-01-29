import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import MachineCard from '../components/MachineCard';
import { machines } from '../data/machines';
import { FaWhatsapp } from 'react-icons/fa';
import Testimonials from './Testimonials';

const Home = () => {

    return (
        <div className="bg-gray-50 min-h-screen">
            <SEO title="Home - Machine Services" />
            <Hero />
            {/* Light section with subtle gradient */}
            <section className="relative pt-32 pb-8 px-4 bg-white">
                {/* Gradient Overlay removed or adjusted for light mode */}
                <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white/50"></div>

                {/* Highlighted Heading */}
                <div className="relative mb-24 text-center">
                    <span className="block text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4 animate-pulse">
                        Elite Industrial Grade
                    </span>
                    <h2 className="text-4xl md:text-7xl uppercase font-display font-extrabold tracking-tight text-gray-900 m-0 relative inline-block">
                        Our <span className="text-primary relative inline-block">
                            Premium
                            {/* Glowing Underline Effect */}
                            <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary blur-md opacity-70 rounded-full"></span>
                        </span> Machines
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {machines.slice(0, 3).map((machine) => (
                        <MachineCard key={machine.id} machine={machine} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg group shadow-xl"
                    >
                        See All Machines
                        <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </Link>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/+918130513030"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                title="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
            </a>
        </div>
    );
};

export default Home;
