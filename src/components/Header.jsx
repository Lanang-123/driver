import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to={"/"} className="relative text-gray-800 hover:text-teal-700 transition duration-300 ">Home</Link>
                        <Link to={"/about"} className="relative text-gray-800 hover:text-teal-700 transition duration-300 ">About</Link>
                        <Link to={"/order"} className="relative text-gray-800 hover:text-teal-700 transition duration-300 ">Order</Link>
                        <Link to={"/contact"} className="relative text-gray-800 hover:text-teal-700 transition duration-300 ">Contact</Link>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to={"/auth/login"} className="bg-teal-600 text-white px-8 py-2 rounded-full hover:bg-teal-700">Login</Link>
                    <Link to={"/auth/register"} className="border border-black text-black px-6 py-2 rounded-full hover:bg-teal-600">Register</Link>
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
                        <Link to={"/"} className="block text-gray-800 hover:text-teal-500 transition duration-300 text-center border-b border-gray-100 py-3">Home</Link>
                        <Link to={"/about"} className="block text-gray-800 hover:text-teal-500 transition duration-300 text-center border-b border-gray-100 py-3">About</Link>
                        <Link to={"/order"} className="block text-gray-800 hover:text-teal-500 transition duration-300 text-center border-b border-gray-100 py-3">Order</Link>

                        <Link to={"/contact"} className="block text-gray-800 hover:text-teal-500 transition duration-300 text-center border-b border-gray-100 py-3">Contact</Link>
                    </div>
                    <div className="px-5 pb-3 space-y-1">
                        <button className="w-full bg-teal-800 hover:bg-teal-900 text-white px-4 py-2 rounded">Login</button>
                        <button className="w-full border border-black text-black px-4 py-2 rounded hover:bg-teal-900">Register</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
