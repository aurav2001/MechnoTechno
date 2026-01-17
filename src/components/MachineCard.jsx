import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const MachineCard = ({ machine }) => {
    const whatsappNumber = "918826266711";
    const whatsappMessage = encodeURIComponent(`Hi, I'm interested in ${machine.name}. Please provide more details.`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="bg-white rounded-3xl overflow-hidden relative flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group border border-gray-100">
            <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>

                {/* Price/Status Badge */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-primary font-bold text-sm tracking-wide">In Stock</span>
                </div>

                <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-8 flex-1 flex flex-col relative">
                {/* Decorative Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full"></div>

                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {machine.name}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-8 flex-1 line-clamp-3">
                    {machine.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-semibold text-xs uppercase tracking-wider transition-all duration-300"
                    >
                        <FaWhatsapp className="text-lg" />
                        Enquire Now
                    </a>
                    <Link
                        to={`/machine/${machine.id}`}
                        className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 group/link"
                    >
                        View Details
                        <span className="text-xl transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MachineCard;

