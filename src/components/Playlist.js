import React, {useState} from "react";
import styles from "./Playlist.css";
import Tracklist from "./Tracklist";

function Playlist(){

    const[songs, setSongs] = useState([
        {
            id: 1,
            name: "song name",
            artist: "artist",
            album: "album"
        }
    ]);

    const[userInput, setUserInput] = useState("");

    function handleChange(e){
        e.preventDefault();
        setUserInput(e.target.value);
    };


    return (
        <>
            <input onChange={handleChange} type="text" placeholder="New Playlist" value={userInput}></input>
                <Tracklist songs={songs} btn={"-"} />
            <button id="spotify-btn">SAVE TO SPOTIFY</button>
        </>
    );
};

export default Playlist;