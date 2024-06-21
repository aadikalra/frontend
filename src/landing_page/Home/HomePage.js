import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';

import OpenAcount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

import '../css/Home.css';

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAcount />
            <Footer />
        </>
    );
}

export default HomePage;