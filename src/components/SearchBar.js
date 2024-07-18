import React from "react";
import styles from "./SearchBar.css";


function SearchBar(){
    return(
        <>
            <input type="text" value="Enter A Song Title"></input>
            <button id="srch-btn" type="submit">SEARCH</button>
        </>
    )
};

export default SearchBar;