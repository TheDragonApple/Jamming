import React from "react";
import Track from "./Track";
import styles from "./Tracklist.css";

function Tracklist(props){

    return (
      
      <div className="tracklist">
        <ul>
          {props.songs.map(track => {
            return (
              <li className="Track">
                <Track id={track.id} artist={track.artist} songName={track.name} album={track.album}/>
                <button className="add-btn">{props.btn}</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
}

export default Tracklist;
