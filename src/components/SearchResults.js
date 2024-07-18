import React, {useState} from "react";
import Tracklist from "./Tracklist"
import styles from "./SearchResults.css";

function SearchResults(){

    const[results, setResults] = useState([
        {
            id: 238,
            name: 'Espresso',
            artist: 'Sabrina Carpenter',
            album: 'Some Album'
        },
        {
            id: 239,
            name: 'Another Song',
            artist: 'Another artist',
            album: 'Another album'
        }
    ]);


    return (
        <>
            <h2>Results</h2>
            <Tracklist songs={results} btn={"+"}/>
        </>
    );
};

export default SearchResults;