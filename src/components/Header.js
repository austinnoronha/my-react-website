import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../logo.svg';
import './Header.css';

function Header(){

    const [isActive, setActive] = useState(false);
    
    const toggleClass = () => {
        setActive(!isActive);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div>
            <header className="Header">
                <div className="BrandInfo" onClick={scrollToTop}>
                    <img src={logo} className="App-logo" alt="MyReact" title="MyReact" />
                    <b>MyReact</b>
                </div>
                
                <ul className="TopNav">
                    <li>
                        <Link activeClass="active"
                        to="sectionHome"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link 
                        activeClass="active"
                        to="sectionAboutUs"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration={500}>About</Link>
                    </li>
                    <li>
                        <Link 
                        activeClass="active"
                        to="sectionContactUs"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}>Contact</Link>
                    </li>
                </ul>

                <button className="BtnMobileMenu" onClick={toggleClass}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </header>
            
                
            <ul className={isActive ? 'MobileMenuOpen': 'MobileMenuClose'} >
                <li>
                    <Link activeClass="active"
                    to="sectionHome"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={toggleClass}>Home</Link>
                </li>
                <li>
                    <Link 
                    activeClass="active"
                    to="sectionAboutUs"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={toggleClass}>About</Link>
                </li>
                <li>
                    <Link 
                    activeClass="active"
                    to="sectionContactUs"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    onClick={toggleClass}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;