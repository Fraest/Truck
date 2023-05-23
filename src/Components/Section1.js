import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";
import { Link } from 'react-router-dom';

function Section1() {
    return (
        <div className="container2" id="section1">
            <div className="activityContainer">
                <p className="headed">Menu</p>
                <div className="centering">
                    <img src={require("../Media/BTP MENU Updated.jpg")} className="MenuIMG" />
                </div>
            </div>
        </div>
    );
}

export default Section1;