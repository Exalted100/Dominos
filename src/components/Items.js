import React from "react";
import Item from "./Item";
import "./stylesheets/Items.css";

import BarbequePepperoni from "../images/Untitled-1 1.png";

const Items = () => {
    const items = [
        {
            name: "Barbeque Pepperoni",
            price: "2,700",
            image: BarbequePepperoni
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
        }, {
            name: "Chicken Suya",
            price: "2,500",
            image: 
        }, {
            name: "Pineapple Delight",
            price: "2,500",
            image: 
        }, {
            name: "Shawarma Roll",
            price: "1,700",
            image: 
        }, {
            name: "Buffalo Wings",
            price: "1,500",
            image: 
        }, {
            name: "Barbeque Wings",
            price: "1,700",
            image: 
        }, {
            name: "Coca-cola",
            price: "300",
            image: 
        }, {
            name: "Coca-cola Zero",
            price: "300",
            image: 
        }, {
            name: "Fanta",
            price: "300",
            image: 
        }, {
            name: "Sprite",
            price: "300",
            image: 
        }, {
            name: "Pepsi",
            price: "300",
            image: 
        }, {
            name: "Mirinda",
            price: "300",
            image: 
        }, {
            name: "Mountain Dew",
            price: "300",
            image: 
        }, {
            name: "Eva Water",
            price: "300",
            image: 
        }, {
            name: "Aquafina Water",
            price: "300",
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