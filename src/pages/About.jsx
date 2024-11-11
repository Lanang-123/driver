import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            {/* Hero Section */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1687952845059-53c012e1741a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRyaXZlciUyMG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D')" }}>
                <div className="absolute inset-0 bg-teal-700 opacity-50"></div> {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <h1 className="md:text-5xl text-4xl font-bold text-white mb-4">About Our Driver Service</h1>
                    <p className="text-xl text-white">Your reliable partner for safe and comfortable transportation.</p>
                </div>
            </div>

            {/* About Section */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-semibold text-teal-500">Our Mission</h2>
                        <p className="text-lg">
                            To provide exceptional driving services that prioritize safety, comfort, and customer satisfaction.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl font-semibold text-teal-500">Our Vision</h2>
                        <p className="text-lg">
                            To be the leading driver service in the region, known for our professionalism and commitment to excellence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Glass Effect Section */}
            <div className="w-full bg-black bg-opacity-60 py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
                        <h2 className="text-3xl font-semibold text-white">Join Our Team!</h2>
                        <p className="text-lg text-white mb-4">
                            We are looking for dedicated drivers who are passionate about providing excellent service to our customers.
                        </p>
                        <Link to={"/auth/login"} className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition duration-300">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;