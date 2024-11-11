import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is imported if using npm
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero bg-cover bg-center h-screen text-white flex flex-col items-start md:mx-32 mx-0 rounded-xl px-4 relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1482029255085-35a4a48b7084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8")' }}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

            <div className="w-full md:max-w-lg text-left mb-8 mt-24 md:mt-48 md:ml-6 z-10">
                <h1 className="font-bold mb-4"><span className='md:text-6xl text-5xl'>We always aim for the stars.</span></h1>
                <p className="text-xl mb-8">Join us and discover the journey.</p>
                {/* <button className="bg-teal-800 hover:bg-teal-900 px-6 py-3 rounded-full text-lg">Get Started</button> */}
            </div>
            <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-4 md:p-8 text-left mt-8 md:mx-auto absolute md:-bottom-32 md:left-1/2 left-6 -bottom-40 md:transform md:-translate-x-1/2" style={{ width: '90%' }}>
                <div className='flex flex-col md:flex-row justify-between gap-3'>
                    <div className='border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-8'>
                        <h2 className="text-2xl font-semibold flex items-center md:justify-center justify-start text-black">
                            <i className="fas fa-star mr-2"></i> Unique Design
                        </h2>
                        <p className="text-lg mb-4">Our designs are</p>
                    </div>
                    <div className='border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-24'>
                        <h2 className="text-2xl font-semibold flex items-center md:justify-center justify-start text-black">
                            <i className="fas fa-cogs mr-2"></i> Smart Features
                        </h2>
                        <p className="text-lg mb-4">Our designs are</p>
                    </div>
                    <div className='pr-8 md:pr-18'>
                        <h2 className="text-2xl font-semibold flex items-center md:justify-center justify-start text-black">
                            <i className="fas fa-columns mr-2"></i> Clear Structure
                        </h2>
                        <p className="text-lg mb-4">Our designs are</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-5 mt-8'>
                    <div className='max-w-md'>
                        <h3 className='text-black font-semibold'>
                            <span>Lorem Ipsum is simply dummy text of</span> <span className='text-teal-700'>the printing</span> and typesetting industry. Lorem
                        </h3>
                    </div>
                    <div className="max-w-md mt-4 md:mt-0 md:mr-12">
                        <Link to={"/auth/login"} className="bg-black hover:bg-black px-12 py-2 rounded-full text-md">Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;