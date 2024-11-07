import React from 'react';

const Hero = () => {
    return (
        <section className="hero bg-cover bg-center h-screen text-white flex flex-col mx-0 md:mx-32 items-start rounded-xl px-12 md:px-4 md:pt-0 pt-24" style={{ backgroundImage: 'url("https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g")' }}>
            <div className="w-full md:max-w-lg text-left mb-8 mt-24 md:mt-48 md:ml-6">
                <h1 className="font-bold mb-4"><span className='md:text-6xl text-5xl'>We always aim for the stars.</span></h1>
                <p className="text-xl mb-8">Join us and discover the journey.</p>
                <button className="bg-green-500 px-6 py-3 rounded-full text-lg">Get Started</button>
            </div>
            <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-4 md:p-8 w-full md:max-w-5xl text-left mt-8 mx-auto">
                <div className='flex flex-col md:flex-row justify-between gap-3'>
                    <div className='border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-8'>
                        <h2 className="text-3xl font-bold flex items-center justify-center text-slate-800">Unique Design</h2>
                        <p className="text-lg mb-4 ">Our designs are</p>
                    </div>
                    <div className='border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-24'>
                        <h2 className="text-3xl font-bold flex items-center justify-center text-slate-800">Smart Features</h2>
                        <p className="text-lg mb-4 ">Our designs are</p>
                    </div>
                    <div className='pr-8 md:pr-18'>
                        <h2 className="text-3xl font-bold flex items-center justify-center text-slate-800">Clear Structure</h2>
                        <p className="text-lg mb-4 ">Our designs are</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-5 mt-8'>
                    <div className='max-w-md'>
                        <h3 className='text-slate-800 font-semibold'>
                            <span>Lorem Ipsum is simply dummy text of</span> <span className='text-green-700'>the printing</span> and typesetting industry. Lorem
                        </h3>
                    </div>
                    <div className="max-w-md mt-4 md:mt-0 md:mr-12">
                        <button className="bg-slate-800 hover:bg-slate-900 px-12 py-2 rounded-full text-md">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
