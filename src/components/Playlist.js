import React from "react";
import styles from "./Playlist.css";

function Playlist(){
    return (
        <>
            <input type="text" value="New Playlist"></input>
            <button id="spotify-btn">SAVE TO SPOTIFY</button>
        </>
    );
};

export default Playlist;