import React, {useState} from "react";
import styles from "./SearchBar.css";


function SearchBar(){
    const[userInput, setUserInput] = useState('');

    function handleChange(e){
        e.preventDefault();
        setUserInput(e.target.value);
    };

    return(
        <>
            <input onChange={handleChange} type="text" placeholder="Enter A Song Title" value={userInput}></input>
            <button id="srch-btn" type="submit">SEARCH</button>
        </>
    )
};

export default SearchBar;