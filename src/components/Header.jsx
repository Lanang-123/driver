import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white md:mx-32">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <div className="text-xl font-bold">rendr.</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="relative text-gray-800 hover:text-green-500 transition duration-300 ">Home</a>
                        <a href="#" className="relative text-gray-800 hover:text-green-500 transition duration-300 ">About</a>
                        <a href="#" className="relative text-gray-800 hover:text-green-500 transition duration-300 ">Services</a>
                        <a href="#" className="relative text-gray-800 hover:text-green-500 transition duration-300 ">Portfolio</a>
                        <a href="#" className="relative text-gray-800 hover:text-green-500 transition duration-300 ">Contact</a>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <button className="bg-green-500 text-white px-8 py-2 rounded-full">Login</button>
                    <button className="border border-black text-black px-6 py-2 rounded-full">Register</button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block text-gray-800 hover:text-green-500 transition duration-300 text-center border-b border-gray-100 py-3">Home</a>
                        <a href="#" className="block text-gray-800 hover:text-green-500 transition duration-300 text-center border-b border-gray-100 py-3">About</a>
                        <a href="#" className="block text-gray-800 hover:text-green-500 transition duration-300 text-center border-b border-gray-100 py-3">Services</a>
                        <a href="#" className="block text-gray-800 hover:text-green-500 transition duration-300 text-center border-b border-gray-100 py-3">Portfolio</a>
                        <a href="#" className="block text-gray-800 hover:text-green-500 transition duration-300 text-center border-b border-gray-100 py-3">Contact</a>
                    </div>
                    <div className="px-5 pb-3 space-y-1">
                        <button className="w-full bg-green-500 text-white px-4 py-2 rounded">Login</button>
                        <button className="w-full border border-black text-black px-4 py-2 rounded">Register</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
