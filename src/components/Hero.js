import React from 'react';
import HeroImg from '../assets/hero.jpg';
import './Hero.css';
import HeroData from '../data/HeroData';

function Hero(){

    var heroStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroImg})`
    };

    return (
        <div className="HeroBg" style={heroStyle} id="sectionHome">
            <section>
                <h1>{HeroData.heading}</h1>
                <h2>{HeroData.subHeading}</h2>
                <a href="https://github.com/austinnoronha/">{HeroData.btnText}</a>
            </section>
        </div>
    );
}

export default Hero;