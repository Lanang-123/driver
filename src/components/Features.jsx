import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Impor CSS Font Awesome
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <section className="features md:py-2 py-12 px-4 md:px-32 md:mt-32">
            <div className="container mx-auto flex flex-col md:flex-row items-start md:space-x-8">
                {/* Kolom Pertama */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-start items-start">
                    <h5 className='text-md text-teal-700 font-semibold md:mb-12 mb-3'>Feature</h5>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Discover Our Features</h2>
                    <p className="text-lg text-start text-gray-600 mb-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <Link to={"/about"} className="bg-teal-800 hover:bg-teal-900 text-white px-6 py-3 rounded-full text-lg">
                        Learn More
                    </Link>
                </div>
                {/* Kolom Kedua */}
                <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="bg-black rounded-lg shadow-md p-6 flex justify-start flex-col items-start">
                        <i className="fas fa-check-circle text-white  text-3xl mb-2"></i> {/* Ikon */}
                        <h3 className=" text-xl font-bold text-white mb-2">Feature One</h3>
                        <p className="text-white mb-4 text-start">Description of feature one.</p>

                    </div>
                    {/* Card 2 */}
                    <div className="bg-black rounded-lg shadow-md p-6 flex justify-start flex-col items-start">
                        <i className="fas fa-bolt text-white text-3xl mb-2 "></i> {/* Ikon */}
                        <h3 className="text-xl font-bold text-white mb-2 ">Feature Two</h3>
                        <p className="text-white mb-4 text-start">Description of feature two.</p>

                    </div>
                    {/* Card 3 */}
                    <div className="bg-black rounded-lg shadow-md p-6 flex justify-start flex-col items-start">
                        <i className="fas fa-shield-alt text-white text-3xl mb-2 "></i> {/* Ikon */}
                        <h3 className="text-xl font-bold text-white mb-2 ">Feature Three</h3>
                        <p className="text-white mb-4 text-start">Description of feature three.</p>

                    </div>
                    {/* Card 4 */}
                    <div className="bg-black rounded-lg shadow-md p-6 flex justify-start flex-col items-start">
                        <i className="fas fa-headset text-white text-3xl mb-2 "></i> {/* Ikon */}
                        <h3 className="text-xl font-bold text-white mb-2 ">Feature Four</h3>
                        <p className="text-white mb-4 text-start">Description of feature four.</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
