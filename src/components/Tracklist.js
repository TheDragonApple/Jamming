import React from "react";
import Track from "./Track";
import styles from "./Tracklist.css";

function Tracklist(props){
    return (
        <ul>
          {props.results.map(track => {
            return (
              <Track id={track.id} artist={track.artist} songName={track.name} album={track.album} />
            )
          })}
        </ul>
    );
}

export default Tracklist;
