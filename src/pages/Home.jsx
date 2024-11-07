import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';
import JoinUs from '../components/JoinUs';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="App flex flex-col min-h-screen">
            <Hero />
            <Features />
            <Team />
            <JoinUs />
            <Testimonials />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;
