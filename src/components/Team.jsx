import React from 'react';

const Team = () => {
    return (
        <section className="team py-12 bg-white text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Our passionate team of creative professionals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6">
                        <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Kevin Stanford</h3>
                        <p className="text-gray-600">Web Developer</p>
                    </div>
                    <div className="p-6">
                        <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Melissa Redmond</h3>
                        <p className="text-gray-600">Marketing</p>
                    </div>
                    <div className="p-6">
                        <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Robert Bridge</h3>
                        <p className="text-gray-600">Design</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
