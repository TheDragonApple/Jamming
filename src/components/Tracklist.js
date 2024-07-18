import React from "react";
import Track from "./Track";
import styles from "./Tracklist.css";

function Tracklist(props){

  const btn = props.btn;

    return (
      
      <div className="tracklist">
        <ul>
          {props.songs.map(track => {
            return (
              <Track id={track.id} artist={track.artist} songName={track.name} album={track.album} btn={btn} />
            )
          })}
        </ul>
      </div>
    );
}

export default Tracklist;
