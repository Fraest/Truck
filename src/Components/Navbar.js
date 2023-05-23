import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, Component } from "react";
import "../Styles/main.css";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Routes, Route } from 'react-router-dom';

function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (

        <header className="Navbar">
            {/*used a reactjs tutorial to help for a lot of this just to help me learn*/}
            <img src={require('../Media/LOGOOO-removebg-preview.jpg.png')} className="logoImg" />
            <nav ref={navRef}>
                <Link smooth to='#home'>Home</Link>
                <Link smooth to='#section1'>Menu</Link>
                <Link smooth to='#section2'>Contact Us</Link>
                <Link smooth to='#section3'>Schedule</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>

    );
}

export default Navbar;