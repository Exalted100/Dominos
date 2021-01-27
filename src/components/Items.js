import React from "react";
import Item from "./Item";
import "./stylesheets/Items.css";

import BarbequePepperoni from "../images/Untitled-1 1.png";
import DoubleCheese from "../images/Untitled-1 1.png";
import MixedCheese from "../images/Untitled-1 1.png";
import SupremeChicken from "../images/Untitled-1 1.png";
import ChickenSuya from "../images/Untitled-1 1.png";
import PineappleDelight from "../images/Untitled-1 1.png";
import ShawarmaRoll from "../images/Untitled-1 1.png";
import BuffaloWings from "../images/Untitled-1 1.png";
import BarbequeWings from "../images/Untitled-1 1.png";
import Cocacola from "../images/Untitled-1 1.png";
import CocacolaZero from "../images/Untitled-1 1.png";
import Fanta from "../images/Untitled-1 1.png";
import Sprite from "../images/Untitled-1 1.png";
import Pepsi from "../images/Untitled-1 1.png";
import Mirinda from "../images/Untitled-1 1.png";
import MountainDew from "../images/Untitled-1 1.png";
import Eva from "../images/Untitled-1 1.png";
import Aquafina from "../images/Untitled-1 1.png";

const Items = () => {
    const items = [
        {
            name: "Barbeque Pepperoni",
            price: "2,700",
            image: BarbequePepperoni
        }, {
            name: "Double Cheese",
            price: "2,400",
            image: DoubleCheese
        }, {
            name: "Mixed Cheese & Beef",
            price: "2,610",
            image: MixedCheese
        }, {
            name: "Supreme Chicken",
            price: "2,700",
            image: SupremeChicken
        }, {
            name: "Chicken Suya",
            price: "2,500",
            image: ChickenSuya
        }, {
            name: "Pineapple Delight",
            price: "2,500",
            image: PineappleDelight
        }, {
            name: "Shawarma Roll",
            price: "1,700",
            image: ShawarmaRoll
        }, {
            name: "Buffalo Wings",
            price: "1,500",
            image: BuffaloWings
        }, {
            name: "Barbeque Wings",
            price: "1,700",
            image: BarbequeWings
        }, {
            name: "Coca-cola",
            price: "300",
            image: Cocacola
        }, {
            name: "Coca-cola Zero",
            price: "300",
            image: CocacolaZero
        }, {
            name: "Fanta",
            price: "300",
            image: Fanta
        }, {
            name: "Sprite",
            price: "300",
            image: Sprite
        }, {
            name: "Pepsi",
            price: "300",
            image: Pepsi
        }, {
            name: "Mirinda",
            price: "300",
            image: Mirinda
        }, {
            name: "Mountain Dew",
            price: "300",
            image: MountainDew
        }, {
            name: "Eva Water",
            price: "300",
            image: Eva
        }, {
            name: "Aquafina Water",
            price: "300",
            image: Aquafina
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