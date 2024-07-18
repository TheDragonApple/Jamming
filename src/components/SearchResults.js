import React from "react";
import Tracklist from "./Tracklist"
import styles from "./SearchResults.css";

function SearchResults(){
    return (
        <>
            <h2>Results</h2>
            <div className="tracklist">
                <Tracklist />
            </div>
        </>
    );
};

export default SearchResults;