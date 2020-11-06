import React from 'react';
import './AboutUs.css';
import AboutUsSvg from '../assets/aboutus.svg';
import AboutUsData from '../data/AboutUsData';

function AboutUs(){

    return (
        <section className="isPage PageAboutUs" id="sectionAboutUs">
            <div className="AboutUsImg">
                <img src={AboutUsSvg} alt={AboutUsData.heading} title={AboutUsData.heading}></img>
            </div>
            <div className="AboutUsContent">
                <h2>{AboutUsData.heading}</h2>
                {AboutUsData.content}
            </div>
        </section>
    );
}

export default AboutUs;