import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
    const faqData = [
        {
            question: "What types of paper plates and donas can these machines make?",
            answer: "Our machines are highly versatile. By simply changing the dies (moulds), you can make wrinkle plates, dona bowls, diamond-pattern thalis, and buffet plates ranging from 4 inches up to 15 inches in size."
        },
        {
            question: "What is the power consumption of these machines?",
            answer: "Crank-based machines consume approximately 1.5 to 2.5 units per hour (running on a 0.5 HP motor). Hydraulic machines consume around 1.5 units per hour because the 2 HP motor only consumes peak power when actively pressing the sheet."
        },
        {
            question: "Do you provide installation and operational training?",
            answer: "Yes, we provide full support! Every machine comes with detailed video tutorials for installation, operation, and die-changing. We also offer live video call assistance to help your operators get started immediately."
        },
        {
            question: "What raw materials do I need, and do you supply them?",
            answer: "You will need PE-coated paper rolls (silver, golden, or printed designs). Crank machines support 80 to 180 GSM paper, while Hydraulic machines handle heavier stocks up to 500 GSM. We supply high-quality raw materials directly in roll forms."
        },
        {
            question: "How long does it take to change a die/mould?",
            answer: "Thanks to our simplified die-connector system, a die change takes only about 15 to 30 minutes. We include all necessary spanners, wrenches, and heater sets free of charge with the machine."
        },
        {
            question: "What is the warranty policy on your machines?",
            answer: "We offer a 1-year comprehensive warranty on the induction motor and major mechanical components. We also maintain a ready stock of spare parts (heaters, springs, belts, rollers) for immediate dispatch."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="block text-primary uppercase tracking-[0.2em] text-xs font-bold mb-3">
                        Have Questions?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight">
                        Frequently Asked <span className="text-primary relative inline-block">Questions<span className="absolute -bottom-1 left-0 w-full h-1 bg-primary blur-sm opacity-60 rounded-full"></span></span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm md:text-base">
                        Get all the essential details about power, installation, dies, and raw materials.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl border transition-all duration-300 ${
                                    isOpen 
                                        ? 'border-primary/50 shadow-[0_8px_30px_rgb(0,242,234,0.06)]' 
                                        : 'border-gray-200/80 hover:border-gray-300 hover:shadow-md'
                                } overflow-hidden`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 md:px-8 md:py-6 flex items-start justify-between gap-4 text-left cursor-pointer transition-colors focus:outline-none"
                                >
                                    <div className="flex gap-4 items-center">
                                        <FaQuestionCircle className={`text-lg md:text-xl flex-shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
                                        <span className="font-semibold text-gray-800 text-sm md:text-base pr-2">
                                            {item.question}
                                        </span>
                                    </div>
                                    <span className={`p-1.5 rounded-lg bg-gray-50 text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : ''}`}>
                                        <FaChevronDown size={14} />
                                    </span>
                                </button>

                                {/* Answer container with smooth height animation */}
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isOpen ? 'max-h-60 border-t border-gray-100' : 'max-h-0'
                                    }`}
                                >
                                    <div className="px-6 py-5 md:px-8 md:py-6 text-gray-600 text-sm md:text-base leading-relaxed bg-gray-50/50">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
