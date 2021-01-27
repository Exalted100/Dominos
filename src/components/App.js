import React, { useState } from "react";
import Footer from "./Footer";
import Items from "./Items";
import SearchBar from "./SearchBar";

import NavBar from "./NavBar";
import "./stylesheets/App.css";

import "./stylesheets/SearchBar.css";

const App = () => {
    const [search, setSearch] = useState("")

    const onInputChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <NavBar />
            <SearchBar search={search} onInputChange={onInputChange} />
            <Items search={search} />
            <Footer />
        </div>
    )
}

export default App;