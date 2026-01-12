import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import mc1 from '../assets/mc1.jpg';

const Hero = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
            title: "Future of Manufacturing",
            subtitle: "Experience the next generation of industrial automation."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
            title: "Precision Engineering",
            subtitle: "Accuracy down to the nanometer."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1537462713205-e512641bfb18?q=80&w=2070&auto=format&fit=crop",
            title: "Global Systems",
            subtitle: "Connecting your production line to the world."
        },
        {
            id: 4,
            image: mc1,
            title: "Advanced Hydraulics",
            subtitle: "Power and control for heavy industry."
        }
    ];

    const stats = [
        { label: "Years Experience", value: 15, suffix: "+" },
        { label: "Projects Completed", value: 500, suffix: "+" },
        { label: "Happy Clients", value: 100, suffix: "+" }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-[calc(100vh-75px)] w-full overflow-hidden bg-black group mt-[75px]">
            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-primary transition-all duration-300 hover:scale-110 p-2 md:opacity-0 md:group-hover:opacity-100"
            >
                <FaChevronLeft size={40} className="md:h-12 md:w-12" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-primary transition-all duration-300 hover:scale-110 p-2 md:opacity-0 md:group-hover:opacity-100"
            >
                <FaChevronRight size={40} className="md:h-12 md:w-12" />
            </button>

            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-background/80 z-0"></div>

                    <div className="relative z-10 text-center max-w-4xl px-4">
                        <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-6 uppercase tracking-tighter text-white drop-shadow-2xl animate-[slideInDown_1s_ease-out_forwards]">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto opacity-0 animate-[fadeIn_1.2s_ease-out_0.3s_forwards]">
                            {slide.subtitle}
                        </p>
                        <button className="px-10 py-4 text-base font-bold uppercase tracking-widest text-black bg-primary border-none clip-path-polygon cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_30px_#00f2ea] opacity-0 animate-[fadeIn_1.2s_ease-out_0.6s_forwards] [clip-path:polygon(10%_0,100%_0,100%_70%,90%_100%,0%_100%,0%_30%)]">
                            Explore More
                        </button>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 z-20">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`h-1 cursor-pointer transition-all duration-300 rounded-sm ${index === currentSlide ? 'w-20 bg-primary' : 'w-12 bg-white/20'}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-12 right-8 md:right-16 z-20 hidden md:block">
                <div className="text-white font-display border-l-2 border-primary pl-4">
                    <span className="text-4xl font-bold block leading-none">
                        {String(currentSlide + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white/50 text-sm font-medium tracking-widest">
                        / {String(slides.length).padStart(2, '0')}
                    </span>
                </div>
            </div>

            {/* Company Settings/Stats Overlay */}
            <div className="absolute bottom-12 left-8 md:left-16 z-20 hidden md:flex gap-12">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col">
                        <span className="text-3xl font-bold text-white font-display">
                            <CountUp end={stat.value} suffix={stat.suffix} />
                        </span>
                        <span className="text-white/60 text-xs uppercase tracking-widest mt-1">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Helper Component for Counting Animation
const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart padding
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(easeOutQuart * end));

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
};

export default Hero;
