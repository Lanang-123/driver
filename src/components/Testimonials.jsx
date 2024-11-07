import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials py-12 bg-gray-100 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Our customers are our best marketers</h2>
                <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <p className="text-gray-600 mb-4">"Creatively market high standards in web readiness."</p>
                        <h3 className="text-xl font-semibold">Eric Rosenberg</h3>
                    </div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <p className="text-gray-600 mb-4">"Proactively orchestrate future-proof niche markets."</p>
                        <h3 className="text-xl font-semibold">Mike Slater</h3>
                    </div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <p className="text-gray-600 mb-4">"Efficiently innovate scalable web services."</p>
                        <h3 className="text-xl font-semibold">Jane Winters</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
