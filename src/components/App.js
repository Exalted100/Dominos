import React from "react";
import Items from "./Items";

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import "./stylesheets/App.css";

const App = () => {
    return (
        <div>
            <NavBar />
            <SearchBar />
            <Items />
        </div>
    )
}

export default App;