import React from 'react';
import './ContactUs.css';
import ContactUsData from '../data/ContactUsData';
import ContactUsImg from '../assets/contactus.png';

function ContactUs(){

    var contactUsStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ContactUsImg})`
    };

    const contactSubmut = () => {
        alert("[Success]\n Message Sent!")
    }

    return (
        <section className="PageContactUs" style={contactUsStyle} id="sectionContactUs">
            <div className="ContactUsContent">
                <h2>{ContactUsData.heading}</h2>
                {ContactUsData.content}
                <form>
                    <label><input type="text" placeholder="Enter your name" autoComplete="off" required/></label>
                    <label><input type="email" placeholder="Enter your email ID" autoComplete="off" required/></label>
                    <label><input type="tel" placeholder="Enter your contact no."  autoComplete="off" required/></label>
                    <button onClick={contactSubmut}>{ContactUsData.btnText}</button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;