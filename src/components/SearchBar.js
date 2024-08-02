import React, {useState} from "react";
import styles from "./SearchBar.css";


function SearchBar(props){
    const[term, setTerm] = useState('');

    function handleChange(e){
        e.preventDefault();
        setTerm(e.target.value);
    };

    function passTerm(){
        return props.onSearch(term);
    }

    return(
        <>
            <input onChange={handleChange} type="text" placeholder="Enter A Song Title" value={term}></input>
            <button id="srch-btn" onClick={passTerm}>SEARCH</button>
        </>
    )
};

export default SearchBar;