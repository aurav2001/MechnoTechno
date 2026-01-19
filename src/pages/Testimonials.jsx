import { FaStar, FaGoogle, FaCheckCircle } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Production Head, Tata Motors",
        text: "यह मशीन हमारे business के लिए game-changer साबित हुई है। Power-efficient है और results consistently अच्छे मिल रहे हैं। Customer support भी काफी responsive है।",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        date: "2 months ago"
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Director, BuildRight Construction",
        text: "Machine की quality और output दोनों ही शानदार हैं। Installation और training भी बहुत अच्छे से दी गई। Purchase करने के बाद हमारा काम तेज़ और आसान हो गया है।",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        date: "3 weeks ago"
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "CEO, Patel Engineering",
        text: "हमने यह मशीन खरीदी और इसके performance से बहुत संतुष्ट हैं। मशीन smooth चलती है, maintenance कम है और productivity पहले से काफी बढ़ गई है। अपना काम करने के लिए बहुत बढ़िया काम है हम संतुष्ट हैं",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        date: "1 month ago"
    }
];

// Star Rating Component
const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className={`w-4 h-4 ${index < rating ? 'text-[#FBBC05]' : 'text-gray-300'}`}
                />
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* Header with Google Rating Summary */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6">
                        <FaGoogle className="w-5 h-5 text-[#4285F4]" />
                        <span className="text-gray-600 text-sm font-medium">Google Reviews</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Trusted by Pan India Users</h2>
                    <div className="flex items-center justify-center gap-3 mt-6">
                        <span className="text-5xl font-bold text-gray-900">4.9</span>
                        <div className="text-left">
                            <StarRating rating={5} />
                            <p className="text-sm text-gray-500 mt-1">Based on 150+ reviews</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-2xl relative hover:shadow-lg transition-all duration-300 border border-gray-200 group"
                            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
                        >
                            {/* Google Logo & Posted on Google */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                                        <FaGoogle className="w-4 h-4 text-[#4285F4]" />
                                    </div>
                                    <span className="text-xs text-gray-500">Posted on Google</span>
                                </div>
                                <span className="text-xs text-gray-400">{testimonial.date}</span>
                            </div>

                            {/* User Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-gray-900 text-base">{testimonial.name}</h3>
                                        <FaCheckCircle className="w-4 h-4 text-[#4285F4]" title="Verified" />
                                    </div>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div className="mb-3">
                                <StarRating rating={testimonial.rating} />
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {testimonial.text}
                            </p>

                            {/* Verified Purchase Badge */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <FaCheckCircle className="w-3.5 h-3.5 text-green-500" />
                                    <span className="text-xs text-green-600 font-medium">Verified Purchase</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Review CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                    >
                        <FaGoogle className="w-5 h-5 text-[#4285F4]" />
                        <span className="text-gray-700 font-medium">See all reviews on Google</span>
                        <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
