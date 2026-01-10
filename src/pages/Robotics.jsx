import { Link } from 'react-router-dom';

const Robotics = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-display font-bold text-gray-900 mb-8">Robotics Solutions</h1>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl">
                    Deploy intelligent robotic arms for precision tasks. From welding to pick-and-place, our robots work 24/7 with zero fatigue.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6"> Collaborative Robots (Cobots)</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our cobots are designed to work safely alongside humans, boosting productivity without the need for extensive safety caging.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">Heavy Duty Arms</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            For payloads up to 2000kg, our industrial arms handle the toughest jobs in automotive and foundry environments.
                        </p>
                        <Link to="/contact" className="inline-block mt-4 px-8 py-3 bg-primary text-black font-bold uppercase tracking-wider rounded-lg hover:shadow-lg transition-all">
                            Automate Now
                        </Link>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1533237267667-8f78a70a463a?w=800&auto=format&fit=crop"
                        alt="Robotic Arm"
                        className="rounded-3xl shadow-xl w-full h-[500px] object-cover order-1 md:order-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Robotics;
