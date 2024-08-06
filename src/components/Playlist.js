import React, {useState} from "react";
import styles from "./Playlist.css";
import Tracklist from "./Tracklist";

function Playlist(props){


    return (
        <>
            <input onChange={(e) => props.onRename(e)} type="text" placeholder="New Playlist" value={props.name}></input>
                <Tracklist songs={props.songs} btn={"-"} removeSong={props.removeSong} />
            <button id="spotify-btn" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </>
    );
};

export default Playlist;