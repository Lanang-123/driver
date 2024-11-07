import React from 'react';

const Features = () => {
    return (
        <section className="py-20 bg-gray-50 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Features</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white shadow-md rounded p-6">
                            <h3 className="text-xl font-semibold mb-4">Unique Design</h3>
                            <p className="text-gray-600">Stand out with our unique design features.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white shadow-md rounded p-6">
                            <h3 className="text-xl font-semibold mb-4">Smart Features</h3>
                            <p className="text-gray-600">Experience the smart features that make life easier.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-white shadow-md rounded p-6">
                            <h3 className="text-xl font-semibold mb-4">Clear Structure</h3>
                            <p className="text-gray-600">Navigate with ease thanks to our clear structure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
