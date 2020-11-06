import React, { useState } from 'react';
import HeroImg from '../assets/hero.jpg';
import './Hero.css';

function Hero(){

    var heroStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroImg})`
    };

    return (
        <div className="HeroBg" style={heroStyle}>
            <section>
                <h1>Welcome to the world of React!</h1>
                <h2>This is a sample Hero section with some content.</h2>
                <a href="https://github.com/austinnoronha/">Go ahead...</a>
            </section>
        </div>
    );
}

export default Hero;