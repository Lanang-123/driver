import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';
import JoinUs from '../components/JoinUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Supporter from '../components/Supporter';

function Home() {
    return (
        <div className="App flex flex-col min-h-screen">
            <Hero />
            <Supporter />
            <Features />
            <Team />
            <JoinUs />
            <Testimonials />
            <Contact />

        </div>
    );
}

export default Home;
