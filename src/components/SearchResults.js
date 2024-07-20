import React, {useState} from "react";
import Tracklist from "./Tracklist"
import styles from "./SearchResults.css";

function SearchResults(props){

    return (
        <>
            <h2>Results</h2>
            <Tracklist songs={props.results} btn={"+"} addSong={props.addSong}/>
        </>
    );
};

export default SearchResults;