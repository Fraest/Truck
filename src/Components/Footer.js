import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <>
                <Link to="https://docs.google.com/document/d/1jFOKiF_jq6o7erxM-tptAW21NGTTvUr0IEjsJ8gs9pc/edit?usp=sharing" target="_blank">Work Cited</Link>
            </>
        </div>
    );
}

export default Footer;