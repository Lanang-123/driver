import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter py-12 bg-white text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Subscribe to our newsletter</h2>
                <p className="text-gray-600 mb-4">To always be in the loop with our new awesome features</p>
                <input
                    type="email"
                    className="border border-gray-300 p-3 rounded-md mb-4"
                    placeholder="Your Email"
                />
                <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Subscribe</button>
            </div>
        </section>
    );
};

export default Newsletter;
