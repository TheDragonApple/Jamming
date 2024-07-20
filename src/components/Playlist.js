import React, {useState} from "react";
import styles from "./Playlist.css";
import Tracklist from "./Tracklist";

function Playlist(props){

    const[userInput, setUserInput] = useState("");

    function handleChange(e){
        e.preventDefault();
        setUserInput(e.target.value);
    };


    return (
        <>
            <input onChange={handleChange} type="text" placeholder="New Playlist" value={userInput}></input>
                <Tracklist songs={props.songs} btn={"-"} />
            <button id="spotify-btn">SAVE TO SPOTIFY</button>
        </>
    );
};

export default Playlist;