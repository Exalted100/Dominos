import React from "react";
import Pizza from "../images/Untitled-1 1.png";
import "./stylesheets/Item.css";

const Item = () => {
    return (
        <div className="item-container">
            <div className="img-container">
                <img src={Pizza} alt="pizza picture" />
            </div>
            <p className="item-name">Barbecue Peperroni</p>
            <p className="item-price">From ₦2,700</p>
            <p className="add-to-cart">Add to Cart</p>
        </div>
    )
}

export default Item;