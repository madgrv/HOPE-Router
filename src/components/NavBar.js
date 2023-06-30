import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div>
            <ul className="NavBar">     
                <li className="menu"><Link to="/">Home</Link></li>               
                <li className="menu"><Link to="/About">About</Link></li>              
                <li className="menu"><Link to="/Contact">Contact</Link></li>              
                <li className="menu"><Link to="/CatGenerator">Cat Generator</Link></li>                       
            </ul>
        </div>
    )
}
