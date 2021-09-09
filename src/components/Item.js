import React from "react";
import "./stylesheets/Item.css";

const Item = (props) => {
    return (
        <div className="item-container">
            <div className="img-container">
                <img width="300" height="243" src={props.image} alt="pizza" />
            </div>
            <p className="item-name">{props.name}</p>
            <div className="price-container">
                <p className="item-price">From <span className="price">₦{props.price}</span></p>
                <p className="add-to-cart">Add to Cart</p>
            </div>
        </div>
    )
}

export default Item;