import React from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa'; // import ikon

function Contact() {
    return (
        <section className="contact py-20 bg-teal-50 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center text-black">Contact Us</h2>
                <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                    {/* Input untuk nama */}
                    <div className=" relative">
                        <label htmlFor="name" className="block text-lg mb-2">Name</label>
                        <div className="flex items-center">
                            <FaUser className="absolute left-3 text-gray-600" />
                            <input
                                type="text"
                                id="name"
                                className="w-full pl-10 p-2 text-black rounded border-2 border-teal-700 focus:outline-none focus:border-teal-500"
                                placeholder="Your name"
                            />
                        </div>
                    </div>

                    {/* Input untuk email */}
                    <div className=" relative">
                        <label htmlFor="email" className="block text-lg mb-2">Email</label>
                        <div className="flex items-center">
                            <FaEnvelope className="absolute left-3 text-gray-600" />
                            <input
                                type="email"
                                id="email"
                                className="w-full pl-10 p-2 text-black rounded border-2 border-teal-700 focus:outline-none focus:border-teal-500"
                                placeholder="Your email"
                            />
                        </div>
                    </div>

                    {/* Input untuk message */}
                    <div className="mb-4 relative">
                        <label htmlFor="message" className="block text-lg mb-2">Message</label>
                        <div className="flex items-center">
                            <FaComment className="absolute left-3 text-gray-600" />
                            <textarea
                                id="message"
                                className="w-full pl-10 p-2 text-black rounded border-2 border-teal-700 focus:outline-none focus:border-teal-500"
                                rows="4"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                    </div>

                    {/* Tombol kirim */}
                    <button type="submit" className="w-full bg-black text-white py-2 rounded text-lg hover:bg-gray-800">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
