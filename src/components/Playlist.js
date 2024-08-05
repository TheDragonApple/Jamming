import React, {useState} from "react";
import styles from "./Playlist.css";
import Tracklist from "./Tracklist";

function Playlist(props){

    const[playListName, setPlayListName] = useState("");

    function handleChange(e){
        e.preventDefault();
        setPlayListName(e.target.value);
    };


    return (
        <>
            <input onChange={handleChange} type="text" placeholder="New Playlist" value={playListName}></input>
                <Tracklist songs={props.songs} btn={"-"} removeSong={props.removeSong} />
            <button id="spotify-btn" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </>
    );
};

export default Playlist;