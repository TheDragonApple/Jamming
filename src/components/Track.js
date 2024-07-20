import React from "react";

function Track(props){

    return (
        <div className="song-details">
            <h3>{props.songName}</h3>
            <p>{props.artist} | {props.album}</p>
        </div>
    );
}

export default Track;