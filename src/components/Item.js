import React from "react";
import Pizza from "../images/Untitled-1 1.png";
import "./stylesheets/Item.css";

const Item = () => {
    return (
        <div className="item-container">
            <div className="img-container">
                <img src={Pizza} alt="pizza picture" />
            </div>
            <p className="item-name">Barbecue Pepperoni</p>
            <div className="price-container">
                <p className="item-price">From <span className="price">₦2,700</span></p>
                <p className="add-to-cart">Add to Cart</p>
            </div>
        </div>
    )
}

export default Item;