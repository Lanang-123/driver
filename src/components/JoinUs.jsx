import React from 'react';

const JoinUs = () => {
    return (
        <section className="join-us relative py-20 bg-cover bg-center bg-no-repeat md:max-h-screen" style={{ backgroundImage: 'url(https://dircomfidencial.com/wp-content/uploads/2022/12/marca.jpg)', maxHeight: "100vh" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative mx-auto px-6 text-center z-10">
                <h2 style={{ color: "white" }}>Join our team!</h2>
                <button className=" text-white" style={{ backgroundColor: "teal", marginTop: "-20px" }}>Discover our team</button>
            </div>
        </section>
    );
};

export default JoinUs;
