import React from 'react';

const Terms = () => {
    return (
        <div className="bg-white min-h-screen pt-32 pb-16 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 border-b-4 border-primary inline-block pb-2">
                    Terms & Conditions
                </h1>

                <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to MechnoTechno. By accessing our website and using our services, you agree to be bound by the following terms and conditions. Please read them carefully.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Intellectual Property</h2>
                        <p>
                            All content, designs, graphics, and machinery specifications on this website are the intellectual property of MechnoTechno. Unauthorized use or reproduction is strictly prohibited.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Product Specifications</h2>
                        <p>
                            While we strive for accuracy, specifications of machines and equipment are subject to change without notice due to continuous improvement and development.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Limitation of Liability</h2>
                        <p>
                            MechnoTechno shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
