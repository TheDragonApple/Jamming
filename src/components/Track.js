import React from "react";

function Track(props){

    return (
    <li className="track">
        <div className="song-details">
            <h3>{props.songName}</h3>
            <p>{props.artist} | {props.album}</p>
        </div>
        <button className="add-btn">{props.btn}</button>
      </li>
    );
}

export default Track;