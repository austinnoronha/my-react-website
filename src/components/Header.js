import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './Header.css';

function Header(){

    const [isActive, setActive] = useState(false);
    let classTopNav = "";
    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <header className="Header">
                <div className="BranInfo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <b>Brand.com</b>
                </div>
                
                <ul className="TopNav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button className="BtnMobileMenu" onClick={toggleClass}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </header>
            
                
            <ul className={isActive ? 'MobileMenuOpen': 'MobileMenuClose'} >
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default Header;