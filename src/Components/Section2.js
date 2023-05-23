import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/main.css";
import { Link } from 'react-router-dom';

function Section2() {
    return (
        <div className="container3" id="section2">
            <div className="transportationContainer">
                <div className="centering contact">
                    <h1 className="headed">Contact Us</h1>

                    <div className="ContactContainer">
                        <p className="White">
                            Email: BTPSoulFoods@gmail.com
                        </p>
                        <p className="White">
                            Phone: (+1) 318-333-2329
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;