import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            {/* Hero Section */}
            <div className="relative w-full h-screen bg-gradient-to-r from-teal-500 to-teal-700">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-xl text-white">We are a tech-forward company creating innovative solutions.</p>
                </div>
            </div>

            {/* About Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-semibold text-teal-500">Our Mission</h2>
                        <p className="text-lg">
                            We aim to lead the future with cutting-edge technology and innovative solutions that make an impact.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl font-semibold text-teal-500">Our Vision</h2>
                        <p className="text-lg">
                            To empower businesses and individuals through technology, helping them reach their full potential.
                        </p>
                    </div>
                </div>
            </div>

            {/* Glass Effect Section */}
            <div className="w-full bg-black bg-opacity-60 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
                        <h2 className="text-3xl font-semibold text-white">Join Us Today!</h2>
                        <p className="text-lg text-white mb-4">
                            We are always looking for passionate individuals who want to be part of our exciting journey.
                        </p>
                        <button className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;
