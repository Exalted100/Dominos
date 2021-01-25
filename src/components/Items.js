import React from "react";
import Item from "./Item";
import "./stylesheets/Items.css"

const Items = () => {
    return (
        <div className="items-container">
            <Item />
            <Item />
            <Item />
        </div>
    )
}

export default Items;