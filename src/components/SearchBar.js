import React, { useState } from "react";

import "./stylesheets/SearchBar.css";
import Search from "../images/Search.png";
import Filter from "../images/Vector (1).png";

const SearchBar = ({ search, onInputChange }) => {

    return (
        <div className="search-bar">
            <div>
                <i><img src={Search} alt="search field" /></i>
                <input
                onChange={onInputChange}
                value={search} 
                type="text" 
                name="search" 
                className="search" 
                placeholder="Search" 
                />
            </div>
            <button className="filter-button">
                <p>Filter</p>
                <i>
                    <img src={Filter} alt="filter icon" />
                </i>
            </button>
        </div>
    )
}

export default SearchBar;