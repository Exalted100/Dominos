import React from "react";

import "./stylesheets/NavBar.css"
import DominosLogo from "../images/logo (1).png"

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="dominos-logo-container">
                    <img src={DominosLogo}  alt="Dominos Logo" />
                </div>
                <div className="main-nav-container">
                    <ul>
                        <li>Order</li>
                        <li>Deals</li>
                        <li>Location</li>
                    </ul>
                </div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar;