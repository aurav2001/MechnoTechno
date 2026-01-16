const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Production Head, Tata Motors",
        text: "We're very familiar with this machine's assembly and performance. The machine runs smoothly, requires minimal maintenance, and has significantly improved productivity. We're great at doing our job. We're friends.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Director, BuildRight Construction",
        text: "The machine's quality and output are both excellent. Installation and training were also excellent. After purchasing it, our work has become faster and easier.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "CEO, Patel Engineering",
        text: "This machine has proven to be a game-changer for our business. It's power-efficient and consistently delivers good results. Customer support is also very responsive.",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Client Success Stories</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Trusted by Industry Leaders</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 p-8 rounded-3xl relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                            {/* Quote Icon */}
                            <div className="absolute -top-6 right-8 text-8xl text-primary/10 font-serif leading-none group-hover:text-primary/20 transition-colors">”</div>

                            <div className="flex items-center gap-4 mb-8">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed relative z-10">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
