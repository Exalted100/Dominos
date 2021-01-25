import React from "react";

import "./stylesheets/NavBar.css"
import DominosLogo from "../images/logo (1).png";
import Cart from "../images/Vector.png";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="dominos-logo-container">
                    <img src={DominosLogo}  alt="Dominos Logo" />
                </div>
                <div className="main-nav-container">
                    <ul>
                        <li className="order-li">Order<hr/></li>
                        <li>Deals</li>
                        <li>Location</li>
                    </ul>
                </div>
                <div className="right-nav">
                    <div>
                        <img src={Cart} alt="shopping cart" />
                    </div>
                    <p>Login</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;