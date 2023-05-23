import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";
import { Link } from 'react-router-dom';

function Section3() {
    return (
        <div className="container4" id="section3">
            <div className="foodContainer">
                <div className="centering">
                    <h1 className="headed schedule">Schedule</h1>
                    <p className="White">
                        Available at 1 Palm Dr <br></br>New Orleans, LA 70124
                    </p>

                    <h2 className="header">June</h2>
                    <img src={require("../Media/Capture1.jpg")} />
                    <h2 className="header">July</h2>
                    <img src={require("../Media/Capture2.jpg")} className="bottom" />
                </div>
            </div>
        </div>
    );
}

export default Section3;