import React from 'react';
import './AboutUs.css';
import AboutUsSvg from '../assets/aboutus.svg';

function AboutUs(){

    var aboutUsIconStyle = {
        backgroundImage: `url(${AboutUsSvg})`
    };


    return (
        <section className="isPage PageAboutUs">
            <div className="AboutUsImg">
                <img src={AboutUsSvg}></img>
            </div>
            <div className="AboutUsContent">
                <h2>About Us!</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac consectetur velit. Nunc rutrum turpis at justo efficitur fringilla. Nullam gravida, ipsum nec tincidunt tempus, ex purus hendrerit mi, et aliquet lectus justo ac arcu. 
                </p>
                <p>
                Pellentesque nisi lectus, maximus vel blandit at, venenatis id quam. Etiam vulputate ullamcorper bibendum. Aenean mollis a mi non pellentesque. Aenean sed lacinia neque. Sed purus ipsum, posuere ut facilisis vitae, mollis quis mi. Vestibulum sagittis felis ac elit vehicula tristique. Maecenas quis vulputate mauris. Mauris consectetur accumsan mattis. Suspendisse a elit ac nibh vestibulum fringilla.
                </p>
                <p>
                Proin ac consectetur velit. Nunc rutrum turpis at justo efficitur fringilla. Nullam gravida. 
                </p>
            </div>
        </section>
    );
}

export default AboutUs;