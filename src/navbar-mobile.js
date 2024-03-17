import React from 'react';
import './navbar-mobile.css';
import techVileLogo from './images/TechVille-logo.png';
import { useCallback, useRef ,useState } from 'react';


const NavbarMobile = () => {

    const elementRef = useRef(null); // Create a ref
    const menuRef = useRef(null); // Create a ref

    const toggleClass = () => {
        elementRef.current.classList.toggle('vis'); // Toggle class using ClassList
    }
    const toggleMenu = () => {
        menuRef.current.classList.toggle('toggle'); // Toggle class using ClassList
    } 
    


    return (  

        <div className='mobile-navbar'>
            <img  src={techVileLogo} alt="TechVile Logo"  />    

            <div ref={menuRef} className="menuIcon" onClick= {() => {
                toggleClass()
                toggleMenu()}}
            >
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>

                
            <div ref={elementRef} class = "overlay-menu" id='overlay-menu'>
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">About Us</a></li>
                    <li><a href="#about">Services</a></li>
                    <li><a href="#contact">Portfolio</a></li>
                    <li><a href="#contact">Partnership</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>        

        </div>
        
         
         
    );
}
 
export default NavbarMobile;