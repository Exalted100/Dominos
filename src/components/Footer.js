import React from "react";
import "./stylesheets/Footer.css";

import Facebook from "../images/Facebook.png";
import Twitter from "../images/Twitter.png";
import Payment from "../images/image 1.png";
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="minor-footer">
                <div>
                    <p className="company">Company</p>
                    <p className="list"><a href="">About Us</a></p>
                    <p className="list"><a href="">International</a></p>
                    <p className="list"><a href="">FAQ</a></p>
                    <p className="list"><a href="">Contact Us</a></p>
                </div>
                <div className="second-flex-div">
                        <div className="socials-image-container">
                            <img src={Facebook} alt="Facebook" />
                        </div>
                        <div className="socials-image-container">
                            <img src={Twitter} alt="Twitter" />
                        </div>
                    <p className="pay">Pay with</p>
                    <div className="payment-image-container">
                        <img src={Payment} alt="Payment methods" />
                    </div>
                </div>
            </div>
            <div className="main-footer">
                <hr />
                <div className="logo-container">
                    <img src={logo} alt="Dominos logo" />
                </div>
                <p className="copyright">© 2020</p>
                <p className="terms">Terms of Service</p>
            </div>
        </div>
    )
}

export default Footer;