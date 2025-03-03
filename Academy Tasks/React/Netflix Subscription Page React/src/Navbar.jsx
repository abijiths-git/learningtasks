import React from "react";
import './index.css';
import netflixlogo from './assets/netflixlogo.png';


    function Navbar() {
        return (
            <div className="navbar">
                <a href=""><img className="bebas-neue-regular" src={netflixlogo} alt="Nx Logo" /></a>
                <a href="">Sign Out</a>
            </div>
        );
};
                
export default Navbar;