const Company = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8">About MachinePro</h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                    MachinePro is a global leader in industrial automation and heavy machinery solutions.
                    Founded in 2010, we have empowered over 500 factories to achieve peak efficiency through our state-of-the-art technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                        <div className="text-4xl font-bold text-primary mb-2">15+</div>
                        <div className="text-gray-500 font-medium">Years Experience</div>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                        <div className="text-4xl font-bold text-primary mb-2">500+</div>
                        <div className="text-gray-500 font-medium">Projects Delivered</div>
                    </div>
                    <div className="p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-gray-500 font-medium">Global Support</div>
                    </div>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        To revolutionize the manufacturing industry by making advanced robotics and automation accessible, reliable, and sustainable for businesses of all sizes.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We believe in a future where machines and humans work in perfect harmony to build a better world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Company;
