import React from 'react';
import './navbar-desktop.css';
import techVileLogo from './images/TechVille-logo.png';


const NavbarDesktop = () => {
    return (  
        <nav className="navbar"> 
            <img src={techVileLogo} alt="Techvile-logo"/>
            <div className="links">
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">About Us</a></li>
                    <li><a href="#about">Services</a></li>
                    <li><a href="#contact">Portfolio</a></li>
                    <li><a href="#contact">Partnership</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>
         
    );
}
 
export default NavbarDesktop;