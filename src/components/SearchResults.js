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
            <div className="tracklist">
                <Tracklist results={results}/>
            </div>
        </>
    );
};

export default SearchResults;