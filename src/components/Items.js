import React from "react";
import Item from "./Item";
import "./stylesheets/Items.css";

import BarbecuePepperoni from "../images/Untitled-1 1.png";

const Items = () => {
    const items = [
        {
            name: "Barbecue Pepperoni",
            price: "2,700",
            image: BarbecuePepperoni
        }, {
            name: "Double Cheese",
            price: "2,400",
            image: 
        }, {
            name: "Mixed Cheese & Beef",
            price: "2,610",
            image: 
        }, {
            name: "Supreme Chicken",
            price: "2,700",
            image: 
        }
    ]

    return (
        <div className="items-container">
            {items.map(item => {
                return (
                    <div key={item.name}>
                        <Item name={item.name} price={item.price} image={item.image} />
                    </div>
                )
            })}
        </div>
    )
}

export default Items;