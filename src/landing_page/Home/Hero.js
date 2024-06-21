import React from 'react';

function Hero() {
    return (
        <div className="container hero-container">
            <div className="row justify-content-center text-center">
                <img className="landing-image" src="https://zerodha.com/static/images/landing.png" alt="Zerodha, no. 1 stock broker in India" />
                <h1 className="landing-heading">Invest in everything</h1>
                <h5 className="landing-subheading">
                    Online platform to invest in stocks, derivatives, mutual funds, and more
                </h5>
                <a href="/open-account" className="landing-btn btn">Sign up now</a>
            </div>
        </div>
    );
}

export default Hero;
